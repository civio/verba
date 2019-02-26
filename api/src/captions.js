const elasticsearch = require('elasticsearch')

export default class Captions {
  constructor(host) {
    // Create eslasticsearch client
    this.client = new elasticsearch.Client({
      host: host
    })
  }

  getSearchQuery(query_str, date_from, date_to, aggs, size, page) {
    // query_str mast be an elasticsearch simple query string
    // https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html
    const query = {
      bool: {
        must: {
          simple_query_string: {
            query: query_str,
            fields: ['text']
          }
        }
      }
    }
    // add date filter if date_from & date_to defined
    if (date_from && date_to) {
      query.bool.filter = [
        {
          range: {
            programme_date: {
              gte: date_from, // date from YYYY-MM-DD
              lte: date_to // date to YYYY-MM-DD
            }
          }
        }
      ]
    }
    const obj = {
      _source: [
        'url',
        'text',
        'start',
        'end',
        'programme_id',
        'programme_date'
      ],
      from: page * size,
      query,
      size,
      sort: [{ programme_date: 'desc' }, { start: 'asc' }] // order by date desc & start time asc
    }
    // add aggregations to search body if aggregations defined
    if (
      aggs &&
      (aggs === 'day' || aggs === 'week' || aggs === 'month' || aggs === 'year') // validate aggregations value (day, week, month or year)
    ) {
      obj.aggs = {
        matches_over_time: {
          date_histogram: {
            field: 'programme_date',
            interval: aggs,
            format: 'yyyy-MM-dd'
          }
        }
      }
    }
    return obj
  }

  parseResults(results, page) {
    const data = {
      page,
      length: results.hits.total,
      results: results.hits.hits.map(d => ({
        id: d._id,
        link: d._source.url,
        content: d._source.text,
        time_start: Math.floor(d._source.start),
        time_end: Math.ceil(d._source.end),
        programme: {
          id: d._source.programme_id,
          title: d._source.programme_title,
          date: d._source.programme_date
        }
      }))
    }
    if (results.aggregations) {
      data.aggregations = results.aggregations.matches_over_time.buckets.map(
        d => {
          const obj = {}
          obj[d.key_as_string] = d.doc_count
          return obj
        }
      )
    }
    return data
  }

  async search(
    query_str,
    date_from,
    date_to,
    aggregations = false,
    size = 50,
    page = 0
  ) {
    const results = await this.client.search({
      index: 'captions',
      body: this.getSearchQuery(
        query_str,
        date_from,
        date_to,
        aggregations,
        size,
        page
      )
    })
    return this.parseResults(results, page)
  }
}

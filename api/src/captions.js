const elasticsearch = require('elasticsearch')

export default class Captions {
  constructor(host) {
    // Create eslasticsearch client
    this.client = new elasticsearch.Client({
      host: host
    })
  }

  getSearchQuery(query_str, date_from, date_to, aggregations, size, page) {
    const query = {
      bool: {
        must: { match: { text: query_str } } // match query on text
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
      from: page * size,
      query: query,
      size: size,
      sort: [{ programme_date: 'desc' }, { start: 'asc' }] // order by date desc & start time asc
    }
    // add aggregations to search body if aggregations defined
    if (aggregations) {
      obj.aggs = {
        matches_over_time: {
          date_histogram: {
            field: 'programme_date',
            interval: 'day',
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

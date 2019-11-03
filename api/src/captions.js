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
            fields: ['text'],
            default_operator: 'AND'
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
        'entities',
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

  mapResult(d) {
    return {
      id: d._id,
      link: d._source.url,
      content: d._source.text,
      time_start: Math.floor(d._source.start),
      time_end: Math.ceil(d._source.end),
      entities: d._source.entities.map(e => {
        return {
          text: e.text,
          confidence: e.confidence,
          type: e.type
        }
      }),
      programme: {
        id: d._source.programme_id,
        title: d._source.programme_title,
        date: d._source.programme_date
      }
    }
  }

  parseResults(results, page) {
    const data = {
      page,
      length: results.hits.total.value,
      results: results.hits.hits.map(this.mapResult)
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

  async fetchContext(
    programme_id,
    start_time,
    range
  ) {
    const query = {
      query: {
        bool: {
          filter: [
            { term: { programme_id: programme_id } },
            { range: { start: { gte: parseInt(start_time)-range/2, lte: parseInt(start_time)+range/2 }} }
          ]
        }
      },
      sort: { start: { order: 'asc' }}
    }
    const results = await this.client.search({
      index: 'captions',
      body: query
    })
    return results.hits.hits.map(this.mapResult)
  }

  async fetchProgrammeList() {
    const query = {
      size: 0,
      aggs: {
        programmes: {
          composite: {
            sources: [
              { date: { date_histogram: { field: 'programme_date', calendar_interval: '1d', format: 'yyyy-MM-dd', order: 'desc' } } },
              { id: { terms: {field: 'programme_id.keyword' } } },
              { title: { terms: {field: 'programme_title.keyword' } } }
            ],
            size : 10000
          }
        }
      }
    }
    const results = await this.client.search({
      index: 'captions',
      body: query
    })
    return results.aggregations.programmes.buckets.map(d => { return d.key })
  }

  async fetchProgrammeTranscription(
    programme_id
  ) {
    const query = {
      query: {
        bool: {
          filter: [
            { term: { programme_id: programme_id } }
          ]
        }
      },
      size: 10000,
      sort: { start: { order: 'asc' }}
    }
    const results = await this.client.search({
      index: 'captions',
      body: query
    })
    return results.hits.hits.map(this.mapResult)
  }
}

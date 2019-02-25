const elasticsearch = require('elasticsearch')

export default class Captions {
  constructor(host) {
    // Create eslasticsearch client
    this.client = new elasticsearch.Client({
      host: host
    })
  }

  async search(query, date_from, date_to, size = 50, page = 0) {
    const queryObj = {
      bool: {
        must: { match: { text: query } } // match query on text
      }
    }
    // add date filter if date_from & date_to defined
    if (date_from && date_to) {
      queryObj.bool.filter = [
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
    const results = await this.client.search({
      index: 'captions',
      body: {
        from: page * size,
        query: queryObj,
        size: size,
        sort: [{ programme_date: 'desc' }, { start: 'asc' }] // order by date desc & start time asc
      }
    })
    return {
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
  }
}

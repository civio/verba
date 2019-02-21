const elasticsearch = require('elasticsearch')

export default class Captions {
  constructor(host) {
    // Create eslasticsearch client
    this.client = new elasticsearch.Client({
      host: host
    })
  }

  async search(query, size = 50, page = 0) {
    const results = await this.client.search({
      index: 'captions',
      from: page * size,
      size: size,
      body: {
        query: {
          bool: {
            must: { match: { text: query } } // match query on text
          }
        },
        sort: [{ programme_date: 'desc' }, { start: 'asc' }] // order by date desc & start time asc
      }
    })
    return results.hits.hits.map(d => ({
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

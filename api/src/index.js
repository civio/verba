import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'dotenv/config'
import 'csv-express'
import cors from 'cors'
import express from 'express'
import Captions from './captions'

const PORT = process.env.PORT || 8888

// Create captions model
const captions = new Captions(process.env.ELASTIC_API_URL)

// Create express app
const app = express()

app.use(cors())

// Express 4 doesn't catch errors in async handlers, and the unhandled rejection
// kills the process. This passes them on to Express, which answers with a 500.
const handle = fn => (request, response, next) =>
  fn(request, response).catch(next)

app.get('/', (request, response) => {
  response.json({ name: 'Verba Volant API', version: '1.0' })
})

app.get('/search', cors(), handle(async(request, response) => {
  if (request.query.q) {
    const results = await captions.search(
      request.query.q,
      request.query.date_from,
      request.query.date_to,
      request.query.aggregations,
      request.query.size,
      request.query.page
    )
    response.json(results)
  } else {
    response.json({ error: 'No query defined' })
  }
}))

app.get('/search.csv', cors(), handle(async(request, response) => {
  if (request.query.q) {
    const results = await captions.search(
      request.query.q,
      request.query.date_from,
      request.query.date_to,
      request.query.aggregations,
      request.query.size,
      request.query.page
    )
    response.csv(
      results.results.map(result => {
        return {
          id: result.id,
          link: result.link,
          content: result.content.trim(),
          start_time: result.time_start,
          end_time: result.time_end,
          programme_id: result.programme.id,
          programme_date:
            result.programme
              .date /*,
        entities: JSON.stringify(result.entities)*/,
        }
      }),
      true
    )
  } else {
    response.json({ error: 'No query defined' })
  }
}))

app.get('/fetchContext', cors(), handle(async(request, response) => {
  const results = await captions.fetchContext(
    request.query.programme_id,
    request.query.start_time,
    request.query.range
  )
  response.json(results)
}))

app.get('/fetchProgrammeList', cors(), handle(async(request, response) => {
  const results = await captions.fetchProgrammeList()
  response.json(results)
}))

app.get('/fetchProgrammeTranscription', cors(), handle(async(request, response) => {
  const results = await captions.fetchProgrammeTranscription(
    request.query.programme_id
  )
  response.json(results)
}))

// Register express routes & serve
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

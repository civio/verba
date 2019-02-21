import cors from 'cors'
import express from 'express'
import Captions from './captions'

const PORT = process.env.PORT || 8888

// Create captions model
const captions = new Captions('http://api-verba-volant.civio.es')

// Create express app
const app = express()

app.use(cors())

app.get('/', (request, response) => {
  response.json({ name: 'Verba Volant API', version: '1.0' })
})

app.get('/search', cors(), async (request, response) => {
  if (request.query.q) {
    const results = await captions.search(
      request.query.q,
      request.query.size,
      request.query.page
    )
    response.json(results)
  } else {
    response.json({ error: 'No query defined' })
  }
})

// Register express routes & serve
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

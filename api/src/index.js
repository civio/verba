import express from 'express'
import Captions from './captions'

// Create captions model
const captions = new Captions('http://api-verba-volant.civio.es')

// Create express app & router instance
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 8080

router.get('/', (request, response) => {
  response.json({ name: 'Verba Volant API', version: '1.0' })
})

router.get('/search', async (request, response) => {
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
app.use('/api', router)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

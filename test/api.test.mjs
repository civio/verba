// End-to-end tests for the API, run against the fixture in test/fixtures (six
// programmes exported from production). They only talk to the API over HTTP, so
// they don't depend on how the API is built or which Node version it runs on.
//
//   API_URL=http://localhost:8899/ node --test test/
import { test } from 'node:test'
import assert from 'node:assert/strict'

const API_URL = process.env.API_URL || 'http://localhost:8899/'

async function get(path, params = {}) {
  const url = new URL(path, API_URL)
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value)
  const response = await fetch(url)
  assert.equal(response.status, 200, `${url} returned ${response.status}`)
  return response
}

const getJSON = async (path, params) => (await get(path, params)).json()
const search = params => getJSON('search', params)

// Results come sorted by programme date (newest first), then by start time
function assertSorted(results) {
  for (let i = 1; i < results.length; i++) {
    const [a, b] = [results[i - 1], results[i]]
    assert.ok(
      a.programme.date > b.programme.date ||
        (a.programme.date === b.programme.date && a.time_start <= b.time_start),
      `results out of order at position ${i}`
    )
  }
}

test('root returns the API name', async () => {
  assert.deepEqual(await getJSON(''), { name: 'Verba Volant API', version: '1.0' })
})

test('search without a query returns an error', async () => {
  assert.deepEqual(await getJSON('search'), { error: 'No query defined' })
})

test('search returns matching captions', async () => {
  const data = await search({ q: 'apagón' })
  assert.equal(Number(data.page), 0)
  assert.equal(data.length, 142)
  assert.equal(data.results.length, 50) // default page size
  assert.equal(data.aggregations, undefined)
  assertSorted(data.results)

  const first = data.results[0]
  assert.deepEqual(
    { ...first, programme: { id: first.programme.id, date: first.programme.date } },
    {
      id: 'T7RVppgBM2NOkfORNwvu',
      link: 'https://www.rtve.es/v/16558051/?t=00h00m54s',
      content: 'Apagón eléctrico masivo en la península ibérica.\n',
      time_start: 54,
      time_end: 57,
      entities: [],
      programme: { id: '16558051', date: '2025-04-28T14:30:00+00:00' },
    }
  )
})

test('search results include named entities', async () => {
  const data = await search({ q: '"crecida del Ebro"' })
  const entities = data.results.flatMap(r => r.entities)
  assert.ok(entities.length > 0)
  for (const entity of entities) {
    assert.deepEqual(Object.keys(entity).sort(), ['confidence', 'text', 'type'])
  }
})

test('search supports simple query string syntax', async () => {
  assert.equal((await search({ q: 'gobierno' })).length, 150)
  assert.equal((await search({ q: 'gobierno luz' })).length, 1) // AND by default
  assert.equal((await search({ q: 'gobierno -luz' })).length, 149)
  assert.equal((await search({ q: '"crecida del Ebro"' })).length, 7)
  assert.equal((await search({ q: 'palabrainexistente' })).length, 0)
})

test('search paginates', async () => {
  const all = await search({ q: 'gobierno', size: 6 })
  const page0 = await search({ q: 'gobierno', size: 3, page: 0 })
  const page1 = await search({ q: 'gobierno', size: 3, page: 1 })
  assert.equal(Number(page1.page), 1)
  assert.equal(page1.length, 150)
  assert.deepEqual(
    [...page0.results, ...page1.results].map(r => r.id),
    all.results.map(r => r.id)
  )
})

test('search filters by date', async () => {
  const data = await search({ q: 'gobierno', date_from: '2016-01-01', date_to: '2016-12-31' })
  assert.equal(data.length, 21)
  for (const result of data.results) assert.match(result.programme.date, /^2016-/)
})

test('search aggregates matches over time, including empty periods', async () => {
  const byYear = await search({ q: 'gobierno', aggregations: 'year' })
  assert.deepEqual(byYear.aggregations, [
    { '2015-01-01': 29 },
    { '2016-01-01': 21 },
    { '2017-01-01': 0 },
    { '2018-01-01': 0 },
    { '2019-01-01': 0 },
    { '2020-01-01': 0 },
    { '2021-01-01': 0 },
    { '2022-01-01': 0 },
    { '2023-01-01': 0 },
    { '2024-01-01': 42 },
    { '2025-01-01': 58 },
  ])

  const byMonth = await search({
    q: 'gobierno',
    aggregations: 'month',
    date_from: '2016-01-01',
    date_to: '2016-12-31',
  })
  assert.deepEqual(byMonth.aggregations, [{ '2016-03-01': 21 }])

  const invalid = await search({ q: 'gobierno', aggregations: 'decade' })
  assert.equal(invalid.aggregations, undefined)
})

test('search results can be downloaded as CSV', async () => {
  const response = await get('search.csv', { q: 'Ebro', size: 3 })
  assert.match(response.headers.get('content-type'), /^text\/csv/)
  const lines = (await response.text()).trim().split(/\r?\n/)
  assert.deepEqual(lines, [
    'id,link,content,start_time,end_time,programme_id,programme_date',
    '"UrRVppgBM2NOkfORNw_u","https://www.rtve.es/v/16558051/?t=02h39m39s","Es el caso de la planta de Seat, en Martorell, y la de Ebro, en la Zona Franca de Barcelona.",9579,9580,16558051,"2025-04-28T14:30:00+00:00"',
    '"7ZsrR5gBM2NOkfORo0mO","http://rtve.es/v/3507956?t=00h43m35s","Hoy seguimos pendientes del Ebro y su caudal.",2615,2618,3507956,"2016-03-02T21:00:00+00:00"',
    '"85srR5gBM2NOkfORo0mO","http://rtve.es/v/3507956?t=00h44m42s","Esta es la imagen del Ebro a su paso por Zaragoza hace solo unos minutos.",2682,2685,3507956,"2016-03-02T21:00:00+00:00"',
  ])
})

test('context returns the captions around a given time', async () => {
  const data = await getJSON('fetchContext', { programme_id: '3022360', start_time: 60, range: 20 })
  assert.deepEqual(
    data.map(r => [r.programme.id, r.time_start]),
    [
      ['3022360', 56],
      ['3022360', 63],
    ]
  )
})

test('programme list returns every programme, newest first', async () => {
  assert.deepEqual(await getJSON('fetchProgrammeList'), [
    { date: '2025-04-28', id: '16558051', title: 'Telediario 1 - Especial Apagón eléctrico masivo - 28/04/2025' },
    { date: '2024-09-18', id: '16253575', title: 'Telediario - 15 horas - 18/09/24' },
    // RTVE reused the 2015 titles for these 2016 programmes
    { date: '2016-03-02', id: '3507639', title: 'Telediario - 15 horas - 02/03/15' },
    { date: '2016-03-02', id: '3507956', title: 'Telediario - 21 horas - 02/03/15' },
    { date: '2015-03-02', id: '3022360', title: 'Telediario - 15 horas - 02/03/15' },
    { date: '2015-03-02', id: '3022728', title: 'Telediario - 21 horas - 02/03/15' },
  ])
})

test('programme transcription returns all its captions in order', async () => {
  const data = await getJSON('fetchProgrammeTranscription', { programme_id: '3022728' })
  assert.equal(data.length, 434)
  const starts = data.map(r => r.time_start)
  assert.deepEqual(starts, [...starts].sort((a, b) => a - b))
  assert.deepEqual(data[0], {
    id: '7K8yR5gBM2NOkfOR26At',
    link: 'http://rtve.es/v/3022728?t=00h00m13s',
    content: 'En Zaragoza siguen en alerta por la crecida del Ebro.\n',
    time_start: 13,
    time_end: 17,
    entities: [
      { text: 'Zaragoza', confidence: 0.9999021291732788, type: 'LOC' },
      { text: 'Ebro', confidence: 0.9723526835441589, type: 'MISC' },
    ],
    programme: { id: '3022728', title: 'Telediario - 21 horas - 02/03/15', date: '2015-03-02T22:29:00+00:00' },
  })
})

// Must run last: with the current code (Express 4) this request kills the API.
test('an invalid request returns an error and the API keeps running', { todo: 'crashes the API' }, async () => {
  const url = new URL('search?q=Ebro&size=20000', API_URL)
  const response = await fetch(url, { signal: AbortSignal.timeout(5000) })
  assert.ok(response.status >= 400)
  assert.deepEqual(await getJSON(''), { name: 'Verba Volant API', version: '1.0' })
})

// Serves a frontend build like Apache does in production: static files, and
// index.html for any other path so the Vue router can handle it.
//   node test/serve.mjs [dir] [port]
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const DIR = process.argv[2] || 'test/.dist'
const PORT = process.argv[3] || 8080
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

createServer(async (request, response) => {
  const path = normalize(decodeURIComponent(new URL(request.url, 'http://x').pathname))
  try {
    const body = await readFile(join(DIR, path))
    response.writeHead(200, { 'Content-Type': TYPES[extname(path)] || 'application/octet-stream' })
    response.end(body)
  } catch {
    response.writeHead(200, { 'Content-Type': TYPES['.html'] })
    response.end(await readFile(join(DIR, 'index.html')))
  }
}).listen(PORT, () => console.log(`Serving ${DIR} on port ${PORT}`))

import { defineConfig } from '@playwright/test'

// WEB_URL points to a running frontend (e.g. production, for a smoke test after
// deploying). Otherwise we serve the build in test/.dist, which must be built
// with VUE_APP_API_URL pointing to the test API (see README).
const WEB_URL = process.env.WEB_URL

export default defineConfig({
  testDir: 'test',
  testMatch: '*.spec.mjs',
  // Against a real deployment, only a few tests and one at a time: Cloudflare
  // rate-limits the API and blocks the IP for an hour if we go over.
  grep: WEB_URL ? /@smoke/ : undefined,
  workers: WEB_URL ? 1 : undefined,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: WEB_URL || 'http://localhost:8080',
    locale: 'es-ES',
    timezoneId: 'Europe/Madrid',
    trace: 'retain-on-failure',
  },
  webServer: WEB_URL
    ? undefined
    : {
        command: 'node test/serve.mjs test/.dist 8080',
        url: 'http://localhost:8080',
        reuseExistingServer: true,
      },
})

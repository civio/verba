// Browser tests for the frontend. Expected values come from the API itself, so
// they work both against the test fixture and against production:
//   API_URL=http://localhost:8899/ npx playwright test
//   WEB_URL=https://verba.civio.es API_URL=https://verba.civio.es/api/ npx playwright test
// Against production only the @smoke tests run, one at a time: Cloudflare
// rate-limits the API and blocks the IP for an hour (error 1015).
import { test as base, expect } from '@playwright/test'

const API_URL = process.env.API_URL || 'http://localhost:8899/'

async function api(method, params = {}) {
  const url = new URL(method, API_URL)
  for (const [key, value] of Object.entries(params))
    url.searchParams.set(key, value)
  const response = await fetch(url)
  expect(response.ok, `${url} returned ${response.status}`).toBeTruthy()
  return response.json()
}

// Same as the formatTime filter in web/src/main.js
function formatTime(time) {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
}

// Every test fails if the page logs errors. External requests are blocked (RTVE
// images, mostly) so the tests don't depend on third parties, except for CSS and
// fonts: Bootstrap comes from a CDN and the layout breaks without it.
const test = base.extend({
  page: async ({ page, baseURL }, use) => {
    const allowedHosts = [new URL(baseURL).host, new URL(API_URL).host]
    await page.route('**/*', route => {
      const request = route.request()
      const allowed =
        allowedHosts.includes(new URL(request.url()).host) ||
        ['stylesheet', 'font'].includes(request.resourceType())
      return allowed ? route.continue() : route.abort()
    })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => {
      if (
        message.type() === 'error' &&
        !message.text().startsWith('Failed to load resource')
      ) {
        errors.push(message.text())
      }
    })
    await use(page)
    expect(errors, 'errors in the browser console').toEqual([])
  },
})

const resultsCount = page => page.locator('.results-links > p').first()
const resultItems = page => page.locator('.results-list .card-body')

test.describe('search', () => {
  test(
    'shows results, chart and pagination for a query in the URL',
    { tag: '@smoke' },
    async ({ page }) => {
      const expected = await api('search', {
        q: 'gobierno',
        aggregations: 'week',
      })
      await page.goto('/?q=gobierno')

      await expect(resultsCount(page)).toContainText(
        `${expected.length.toLocaleString('es-ES')} resultados para gobierno`
      )
      await expect(resultsCount(page)).toContainText(
        `Página 1 de ${Math.ceil(expected.length / 50)}`
      )
      await expect(resultItems(page)).toHaveCount(Math.min(expected.length, 50))
      await expect(
        resultItems(page).first().locator('.item-content')
      ).toContainText(expected.results[0].content.trim())
      await expect(
        resultItems(page).first().locator('mark').first()
      ).toHaveText(/gobierno/i)
      await expect(
        page.locator('.results-dataviz svg rect').first()
      ).toBeAttached()

      // Bars can be narrower than a pixel, so we send the event instead of hovering
      const counts = expected.aggregations.map(
        bucket => Object.values(bucket)[0]
      )
      const bar = counts.findIndex(count => count > 0)
      await page
        .locator('.results-dataviz svg rect')
        .nth(bar)
        .dispatchEvent('mousemove')
      await expect(page.locator('#tooltip')).toBeVisible()
      await expect(page.locator('#tooltip-mentions')).toHaveText(
        counts[bar] === 1 ? '1 mención' : `${counts[bar]} menciones`
      )
    }
  )

  test('searches when typing a query, and keeps it in the URL', async ({
    page,
  }) => {
    const expected = await api('search', { q: 'Ebro' })
    await page.goto('/')
    await page.getByPlaceholder('Introduce un término').fill('Ebro')
    await page.getByPlaceholder('Introduce un término').press('Enter')

    await expect(page).toHaveURL(/\?q=Ebro(#.*)?$/)
    await expect(resultsCount(page)).toContainText(
      `${expected.length.toLocaleString('es-ES')} resultados para Ebro`
    )
  })

  test('shows no results for an unknown word', async ({ page }) => {
    await page.goto('/?q=palabrainexistente')
    await expect(resultsCount(page)).toContainText(
      '0 resultados para palabrainexistente'
    )
    await expect(resultItems(page)).toHaveCount(0)
  })

  test('paginates', async ({ page }) => {
    const expected = await api('search', { q: 'gobierno', page: 1 })
    await page.goto('/?q=gobierno')
    await page.locator('.page-link[data-index="1"]').click()

    await expect(resultsCount(page)).toContainText('Página 2 de')
    await expect(
      resultItems(page).first().locator('.item-content')
    ).toContainText(expected.results[0].content.trim())
  })

  test('filters by the dates in the URL', async ({ page }) => {
    const expected = await api('search', {
      q: 'gobierno',
      date_from: '2016-01-01',
      date_to: '2016-12-31',
    })
    await page.goto('/?q=gobierno&from=2016-01-01&to=2016-12-31')

    await expect(page.locator('.search-filters > button')).toHaveText(
      'Showing: 01/01/2016 - 31/12/2016'
    )
    await expect(resultsCount(page)).toContainText(
      `${expected.length.toLocaleString('es-ES')} resultados`
    )
    for (const header of await page
      .locator('.results-list .card-header strong')
      .allTextContents()) {
      expect(header).toMatch(/\/2016$/)
    }
  })

  test('filters by dates chosen in the date picker', async ({ page }) => {
    const expected = await api('search', {
      q: 'gobierno',
      date_from: '2016-01-01',
      date_to: '2016-12-31',
    })
    await page.goto('/?q=gobierno')
    await page.getByRole('button', { name: 'Filtrar por fecha' }).click()
    const input = page.locator('.verba-date-picker input')
    await input.click()
    await input.fill('01/01/2016 - 31/12/2016')
    await input.press('End') // the picker reads the input on keyup
    await page
      .locator('.daterangepicker')
      .getByRole('button', { name: 'Filtrar' })
      .click()

    await expect(page.locator('.search-filters > button')).toHaveText(
      'Showing: 01/01/2016 - 31/12/2016'
    )
    await expect(page).toHaveURL(/from=2016-01-01&to=2016-12-31/)
    await expect(resultsCount(page)).toContainText(
      `${expected.length.toLocaleString('es-ES')} resultados`
    )
  })

  test(
    'shows a result in context, linking to the full transcription',
    { tag: '@smoke' },
    async ({ page }) => {
      const { results } = await api('search', { q: '"crecida del Ebro"' })
      await page.goto('/?q="crecida del Ebro"')
      await page.locator('.results-list .card').first().hover() // on desktop the buttons appear on hover
      await resultItems(page).first().getByText('Mostrar en contexto').click()

      const modal = page.locator('.modal.show')
      await expect(modal).toBeVisible()
      await expect(modal.locator('.modal-body')).toContainText(
        results[0].content.trim()
      )
      await expect(modal.locator('mark').first()).toHaveText(
        /crecida del Ebro/i
      )

      const popupPromise = page.waitForEvent('popup')
      await modal.getByText('Ir a transcripción completa').click()
      const popup = await popupPromise
      expect(popup.url()).toContain(
        `/programmes/${results[0].programme.id}#${results[0].time_start}`
      )

      await modal.getByLabel('Close').click()
      await expect(page.locator('.modal.show')).toHaveCount(0)
    }
  )

  test('downloads the results as CSV', async ({ page }) => {
    await page.goto('/?q=Ebro&from=2016-01-01&to=2016-12-31')
    // It opens in a new tab that turns into a download, so we look at the request
    const requestPromise = page
      .context()
      .waitForEvent('request', r => r.url().includes('search.csv'))
    await page.getByRole('link', { name: 'CSV' }).click()
    const url = new URL((await requestPromise).url())

    expect(
      url.href.startsWith(new URL('search.csv', API_URL).href)
    ).toBeTruthy()
    expect(Object.fromEntries(url.searchParams)).toEqual({
      q: 'Ebro',
      size: '10000',
      date_from: '2016-01-01',
      date_to: '2016-12-31',
    })
  })
})

test.describe('programmes', () => {
  test('lists programmes by year and opens one', async ({ page }) => {
    const [latest] = await api('fetchProgrammeList')
    const transcription = await api('fetchProgrammeTranscription', {
      programme_id: latest.id,
    })
    await page.goto('/programmes')
    await page
      .locator('.years-list a', { hasText: latest.date.slice(0, 4) })
      .click()

    const first = page.locator('.verba-films-strip li').first()
    await expect(first).toContainText(latest.title)
    await first.click()

    await expect(page).toHaveURL(new RegExp(`/programmes/${latest.id}$`))
    await expect(page.locator('.verba-transcript-item h4')).toHaveText(
      latest.title
    )
    await expect(page.locator('.verba-transcript-copy p')).toHaveCount(
      transcription.length
    )
  })

  test(
    'opens a programme from a direct link',
    { tag: '@smoke' },
    async ({ page }) => {
      const programmes = await api('fetchProgrammeList')
      const oldest = programmes[programmes.length - 1]
      const transcription = await api('fetchProgrammeTranscription', {
        programme_id: oldest.id,
      })
      await page.goto(`/programmes/${oldest.id}`)

      await expect(page.locator('.verba-transcript-item h4')).toHaveText(
        oldest.title
      )
      await expect(page.locator('.verba-transcript-copy p').first()).toHaveText(
        `${formatTime(transcription[0].time_start)}: ${transcription[0].content.trim()}`
      )

      // It opens RTVE in a new tab; we only check where it goes
      const requestPromise = page
        .context()
        .waitForEvent('request', r => r.url().includes('rtve.es'))
      await page.getByText('Ir al vídeo completo').click()
      expect((await requestPromise).url()).toBe(
        `https://www.rtve.es/v/${oldest.id}/`
      )
    }
  )
})

test.describe('other pages', () => {
  test('navigates through the menu', { tag: '@smoke' }, async ({ page }) => {
    await page.goto('/')
    const menu = page.locator('.verba-navbar-list')

    await menu.getByText('Titulares').click()
    await expect(page).toHaveURL(/\/vignettes$/)
    await menu.getByText('Programas').click()
    await expect(page).toHaveURL(/\/programmes$/)
    await menu.getByText('Sobre Verba').click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(page.locator('main')).toContainText('Verba Volant')
    await menu.getByText('Buscador').click()
    await expect(page.getByPlaceholder('Introduce un término')).toBeVisible()
  })

  test('shows a vignette with its chart', async ({ page }) => {
    await page.goto('/vignettes')
    await page
      .getByRole('link', { name: 'La ultraderecha son los otros' })
      .click()

    const vignette = page.locator('#vignette01')
    await expect(vignette).toHaveClass(/visible/)
    await expect(vignette.locator('.chart-annotated').first()).not.toBeEmpty()
  })
})

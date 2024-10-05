import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  buildThemeFromColors,
  buildThemeFromScheme,
  createSchemeFromColors,
  exampleColors,
  exampleTheme
} from '../index.js'

await describe('createTheme', async () => {
  await it('should create a scheme from colors', () => {
    const scheme = createSchemeFromColors({
      colors: exampleColors,
      type: 'dark'
    })

    assert.ok(scheme != null)
  })

  await it('should build a theme from colors', () => {
    const theme = buildThemeFromColors({
      name: 'test',
      colors: exampleColors
    })

    assert.ok(theme != null)
  })

  await it('should build a theme from a scheme', () => {
    const theme = buildThemeFromScheme({
      name: 'test',
      scheme: exampleTheme
    })

    assert.ok(theme != null)
  })
})

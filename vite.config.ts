/// <reference types="vitest/config" />
// vite.config.ts
import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import { defineConfig } from 'vite'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import type { BrowserCommand } from 'vitest/node'
import { validateHtml } from './.storybook/validateHtml'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const validateHtmlCommand: BrowserCommand<[string, string]> = async (
  _ctx,
  html,
  storyId
) => {
  validateHtml(html, storyId)
}

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const baseDir =
  process.env.FONT_BASE_DIR !== undefined
    ? process.env.FONT_BASE_DIR
    : '/storybook/'

const icons = fs
  .readdirSync(
    path.resolve(
      dirname,
      'node_modules',
      '@kanton-basel-stadt',
      'designsystem',
      'dist',
      'assets',
      'symbols'
    )
  )
  .map((i) => i.replace(/\.svg/g, ''))

export default defineConfig({
  base: baseDir,
  plugins: [KantonBSDesignsystemPlugin({})],
  define: {
    'import.meta.env.STORYBOOK_DDS_ICONS': JSON.stringify(icons),
  },
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    emptyOutDir: false,
    outDir: 'built-css',
    rollupOptions: {
      input: './.storybook/storybook.css',
      output: {
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
            commands: {
              validateHtml: validateHtmlCommand,
            },
          },
        },
      },
    ],
  },
})

// vite.config.ts
import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import { defineConfig } from 'vite'
import * as fs from 'node:fs'
import * as path from 'node:path'

const baseDir =
  process.env.FONT_BASE_DIR !== undefined
    ? process.env.FONT_BASE_DIR
    : '/storybook/'

const icons = fs
  .readdirSync(
    path.resolve(
      __dirname,
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
})

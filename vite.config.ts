// vite.config.ts
import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import { defineConfig } from 'vite'

const baseDir =
  process.env.FONT_BASE_DIR !== undefined
    ? process.env.FONT_BASE_DIR
    : '/storybook/'

export default defineConfig({
  base: baseDir,
  plugins: [KantonBSDesignsystemPlugin({})],
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

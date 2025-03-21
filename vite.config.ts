// vite.config.ts
import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.FONT_BASE_DIR || '/storybook/',
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

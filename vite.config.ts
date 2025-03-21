// vite.config.ts
import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [KantonBSDesignsystemPlugin({})],
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    emptyOutDir: false,
    outDir: '.',
    rollupOptions: {
      input: './.storybook/storybook.css',
      output: {
        assetFileNames: `built-css/[name].[ext]`,
      },
    },
  },
})

import path from 'node:path'
import remarkGfm from 'remark-gfm'
import { mergeConfig } from 'vite'

const config = {
  core: {
    disableTelemetry: true,
  },

  managerHead: (head) => {
    const cleanedHtml = head
      ? head.replace(/<link\s+rel=["']icon["'][^>]*>/gi, '')
      : ''
    return `${cleanedHtml}<link rel="icon" href="/favicon.ico">`
  },

  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        {
          name: 'fix-storybook-mdx-react-shim-file-url',
          enforce: 'pre',
          resolveId(source) {
            if (
              source ===
              'file://./node_modules/@storybook/addon-docs/dist/mdx-react-shim.js'
            ) {
              return path.resolve(
                process.cwd(),
                'node_modules/@storybook/addon-docs/dist/mdx-react-shim.js'
              )
            }

            return null
          },
        },
      ],
    }),

  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },

  staticDirs: ['../static', { from: '../built-css', to: '/built-css' }],
  docs: {},
}

export default config

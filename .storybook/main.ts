import KantonBSDesignsystemPlugin from '@kanton-basel-stadt/designsystem/vite'
import * as fs from 'node:fs'
import * as path from 'node:path'

const icons = fs.readdirSync(
  path.resolve(__dirname, '..', 'node_modules', '@kanton-basel-stadt', 'designsystem', 'dist', 'assets', 'symbols')
).map(i => i.replace(/\.svg/g, ''))

const config = {
  managerHead: head => {
    let cleanedHtml = head ? head.replace(/<link\s+rel=["']icon["'][^>]*>/gi, '') : ''
    return `${cleanedHtml}<link rel="icon" href="/favicon.ico">`
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
          },
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../static'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite')

    return mergeConfig(config, {
      plugins: [
        KantonBSDesignsystemPlugin({}),
      ],
      define: {
        'import.meta.env.STORYBOOK_DDS_ICONS': JSON.stringify(icons),
      },
      server: {
        fs: {
          strict: false,
        }
      },
    })
  },
}
export default config

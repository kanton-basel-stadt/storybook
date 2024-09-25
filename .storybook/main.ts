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
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
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

    console.log('here???')

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

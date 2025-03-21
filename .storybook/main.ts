import remarkGfm from 'remark-gfm'

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

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-viewport',
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
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    './src/iconSymbolAddon/register.tsx',
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },

  staticDirs: ['../static', '../built-css'],
  docs: {},
}
export default config

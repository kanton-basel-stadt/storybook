import './storybook.css'
import CodeBlock from './components/CodeBlock'
import Table from './components/Table'
import type { Preview } from '@storybook/web-components'
import { withIconsSymbols } from './src/iconSymbolAddon/withIconsSymbols'

const preview: Preview = {
  decorators: [withIconsSymbols],
  parameters: {
    docs: {
      components: {
        code: CodeBlock,
        table: Table,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      removeEmptyComments: true,
      removeComments: true,
      transform: (code: string) => {
        const transformEl = document.createElement('div')
        transformEl.innerHTML = code

        // Empty out all the icon tags, so their usage is apparent.
        // @ts-expect-error .env is not defined on the type, but present thanks to Vite.
        import.meta.env.STORYBOOK_DDS_ICONS.forEach((iconName: string) => {
          const selector = 'icon-symbol-' + iconName
          const icons = Array.from(transformEl.querySelectorAll(selector))

          icons.forEach((el) => (el.innerHTML = ''))
        })

        // Replace all encoded ampers-ands with actual ones.
        return transformEl
          .querySelector('#root-inner')
          .innerHTML.replace(/&amp;/g, '&')
      },
    },
  },
}

export default preview

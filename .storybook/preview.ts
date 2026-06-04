import './storybook.css'
import CodeBlock from './components/CodeBlock'
import Table from './components/Table'
import type { Preview } from '@storybook/web-components-vite'
import { withIconsSymbols } from './src/iconSymbolAddon/withIconsSymbols'
import toPascalCase from '../helpers/toPascalCase'

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
          const selectorKebab = 'icon-symbol-' + iconName
          const selectorPascal = 'IconSymbol' + toPascalCase(iconName)
          const icons = [
            ...Array.from(transformEl.querySelectorAll(selectorKebab)),
            ...Array.from(transformEl.querySelectorAll(selectorPascal)),
          ]

          icons.forEach((el) => (el.innerHTML = ''))
        })

        // Replace all encoded ampersands with actual ones.
        return transformEl
          .querySelector('#root-inner')
          .innerHTML.replace(/&amp;/g, '&')
      },
    },
    options: {
      storySort: {
        order: [
          '1. About the BS.ch Design System',
          '2. Tutorials',
          '3. Basics',
          '4. Single components',
          '5. Combined components',
          '6. Forms',
          '7. Templates',
          '8. Emails',
        ],
      },
    },
  },
}

export default preview

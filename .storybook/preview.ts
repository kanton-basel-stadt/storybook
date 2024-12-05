import '@kanton-basel-stadt/designsystem/assets/css/tailwind.css'
import CodeBlock from './components/CodeBlock'
import Table from './components/Table'

/** @type { import('@storybook/web-components').Preview } */
const preview = {
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
      transform: (code) => {
        const transformEl = document.createElement('div')
        transformEl.innerHTML = code

        // Empty out all the icon tags, so their usage is apparent.
        // @ts-ignore
        import.meta.env.STORYBOOK_DDS_ICONS.forEach(iconName => {
          const selector = 'icon-symbol-' + iconName.replace('_', '-')
          transformEl.querySelectorAll(selector).forEach(el => el.innerHTML = '')
        })

        // Replace all encoded ampers-ands with actual ones.
        return transformEl.querySelector('#root-inner').innerHTML.replace(/&amp;/g, '&')
      },
    }
  },

  tags: ['autodocs']
}

export default preview

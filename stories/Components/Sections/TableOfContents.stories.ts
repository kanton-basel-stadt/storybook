import { TableOfContents } from './TableOfContents'

export default {
  title: '6. Components/Sections/Table of contents',
  render: (args) => TableOfContents(args.content),
  argTypes: {
    content: {
      name: 'Links (JSON Object)',
      control: 'object',
    }
  },
}

export const Default = {
  args: {
    content: [
      {
        label: 'Hello',
        target: '#hello'
      },
      {
        label: 'World',
        target: '#world'
      },
    ]
  },
}

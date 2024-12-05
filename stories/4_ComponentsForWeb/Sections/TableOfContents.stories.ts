import { TableOfContents } from './TableOfContents'

export default {
  title: '4. Components for the web/Sections/Table of contents',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-8495&t=FznYmIANb8uB5p92-1',
    }
  }
}

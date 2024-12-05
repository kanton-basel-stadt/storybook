import { SystemError } from './SystemError'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Form elements/Building blocks/System error',
  render: (args) => SystemError(args.title, args.content),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: 'Some title',
    content: loremIpsum({ count: 3 }),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24906-8340&t=FznYmIANb8uB5p92-1',
    }
  }
}

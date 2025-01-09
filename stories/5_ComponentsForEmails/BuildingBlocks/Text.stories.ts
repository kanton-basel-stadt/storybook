import { Text } from './Text'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Text',
  render: (args) => Text(args.text, args.isBold, args.isGreen, args.size),
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
    },
    isBold: {
      name: 'Bold?',
      control: 'boolean',
    },
    isGreen: {
      name: 'Green?',
      control: 'boolean',
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export const Default = {
  args: {
    text: loremIpsum(),
    isBold: false,
    isGreen: false,
    size: 'medium',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { Text } from './Text'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Text',
  render: (args) => Text(args.text),
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    text: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Title',
  render: (args) => Title(args.title),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

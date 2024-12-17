import { HelpBox } from './HelpBox'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Form elements/Building blocks/Help box',
  render: (args) => HelpBox(args.title, args.text),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    text: {
      name: 'Text',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: loremIpsum(),
    text: loremIpsum({ count: 3 }),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24359-23028&t=FznYmIANb8uB5p92-1',
    },
  },
}

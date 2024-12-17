import { Repeater } from './Repeater'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Form elements/Building blocks/Repeater',
  render: (args) => Repeater(args.legend, args.content),
  argTypes: {
    legend: {
      name: 'Legend',
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
    legend: 'Some fieldset',
    content: loremIpsum({ count: 3 }),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24359-23028&t=FznYmIANb8uB5p92-1',
    },
  },
}

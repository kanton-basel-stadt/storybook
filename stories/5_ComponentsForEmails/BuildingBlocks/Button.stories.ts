import { Button } from './Button'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Button',
  render: (args) => Button(args.type, args.label, args.url),
  argTypes: {
    type: {
      name: 'Type',
      options: ['primary', 'secondary'],
      control: 'radio',
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    url: {
      name: 'URL',
      control: 'text',
    }
  }
}

export const Default = {
  args: {
    type: 'primary',
    label: loremIpsum(),
    url: 'https://www.bs.ch',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    }
  }
}

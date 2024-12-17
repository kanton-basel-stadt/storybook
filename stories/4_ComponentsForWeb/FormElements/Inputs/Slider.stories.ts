import { Slider } from './Slider'

export default {
  title: '4. Components for the web/Form elements/Inputs/Slider',
  render: (args) => Slider(args.label, args.name, args.id),
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'ID',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    label: 'Slide me (needs logic provided by you to properly work)!',
    name: 'my-checkbox',
    id: 'checkbox-123',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24359-23028&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { Slider } from './Slider'

export default {
  title: '6. Components/Form elements/Inputs/Slider',
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
}

import { Radio } from './Radio'

export default {
  title: '6. Components/Form elements/Inputs/Radio',
  render: (args) => Radio(args.label, args.value, args.name, args.id),
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Target href',
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
    label: 'Click me!',
    value: 'yes',
    name: 'my-radio',
    id: 'radio-123',
  },
}

import { Checkbox } from './Checkbox'

export default {
  title: '6. Components/Form elements/Inputs/Checkbox',
  render: (args) => Checkbox(args.label, args.value, args.name, args.id),
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
    name: 'my-checkbox',
    id: 'checkbox-123',
  },
}

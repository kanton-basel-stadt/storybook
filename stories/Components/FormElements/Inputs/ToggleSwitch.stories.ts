import { ToggleSwitch } from './ToggleSwitch'

export default {
  title: '6. Components/Form elements/Inputs/Toggle switch',
  render: (args) => ToggleSwitch(args.label, args.name, args.id),
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
    label: 'Click me!',
    value: 'yes',
    name: 'my-toggle',
    id: 'toggle-123',
  },
}

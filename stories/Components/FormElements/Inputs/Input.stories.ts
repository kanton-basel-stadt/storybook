import { Input } from './Input'

export default {
  title: '6. Components/Form elements/Inputs/Input',
  render: (args) => Input(args.label, args.value, args.name, args.id, args.type),
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Value',
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
    type: {
      name: 'Type',
      control: 'select',
      options: ['text', 'date', 'number', 'email', 'password', 'tel', 'week']
    }
  },
}

export const Default = {
  args: {
    label: 'Label',
    value: '',
    name: 'my-input',
    id: 'input-123',
    type: 'text',
  },
}

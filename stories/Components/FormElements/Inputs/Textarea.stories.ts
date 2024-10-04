import { Textarea } from './Textarea'

export default {
  title: '6. Components/Form elements/Inputs/Textarea',
  render: (args) => Textarea(args.label, args.value, args.name, args.id),
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
    label: 'Label',
    value: '',
    name: 'my-textarea',
    id: 'textarea-123',
  },
}

import { Textarea } from './Textarea'

export default {
  title: '4. Components for the web/Form elements/Inputs/Textarea',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { DropdownSelect } from './DropdownSelect'

export default {
  title: '6. Components/Form elements/Inputs/Dropdown select',
  render: (args) => DropdownSelect(args.label, args.id, args.isOpen, args.canSelectMultiple),
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
    },
    id: {
      name: 'ID',
      control: 'text',
    },
    isOpen: {
      name: 'Is open (You will need to provide this functionality yourself!)',
      control: 'boolean',
    },
    canSelectMultiple: {
      name: 'Can select multiple? (You will need to provide this functionality yourself!)',
      control: 'boolean',
    },
  },
}

export const Default = {
  args: {
    label: 'Select a value',
    id: 'select-123',
    isOpen: false,
    canSelectMultiple: false,
  },
}

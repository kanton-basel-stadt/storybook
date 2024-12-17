import { DropdownSelect } from './DropdownSelect'

export default {
  title: '4. Components for the web/Form elements/Inputs/Dropdown select',
  render: (args) =>
    DropdownSelect(args.label, args.id, args.isOpen, args.canSelectMultiple),
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1',
    },
  },
}

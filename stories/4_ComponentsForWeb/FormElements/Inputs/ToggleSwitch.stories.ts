import { ToggleSwitch } from './ToggleSwitch'

export default {
  title: '4. Components for the web/Form elements/Inputs/Toggle switch',
  render: (args) => ToggleSwitch(args.label, args.name, args.id, args.isReversed),
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
    isReversed: {
      name: 'Is reversed?',
      control: 'boolean',
    }
  },
}

export const Default = {
  args: {
    label: 'Click me!',
    value: 'yes',
    name: 'my-toggle',
    id: 'toggle-123',
    isReversed: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1',
    }
  }
}

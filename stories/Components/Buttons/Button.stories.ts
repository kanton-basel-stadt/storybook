import { Button } from './Button'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'

export default {
  title: '6. Components/Buttons/Button',
  render: (args) => Button(args.label, args.iconName, args.iconPlacement, args.size, args.types),
  argTypes: {
    label: {
      name: 'Text label',
      control: 'text',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames
    },
    iconPlacement: {
      name: 'Icon placement',
      options: ['No icon', 'Icon left', 'Icon right', 'Icon only'],
      control: 'radio',
    },
    size: {
      name: 'Button size',
      options: ['Standard', 'Small'],
      control: 'radio',
    },
    types: {
      name: 'Button types (mix and match)',
      options: ['Link', 'Limited', 'Strong', 'Super', 'Action', 'Feedback', 'Prev', 'Next', 'Close', 'Add', 'Reload', 'Check'],
      control: 'multi-select',
    },
  },
}

export const Default = {
  args: {
    label: 'Click me!',
    iconName: 'baselstab',
    iconPlacement: 'Icon left',
    size: 'Standard',
    types: [],
  },
}

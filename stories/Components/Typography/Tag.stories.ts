import { Tag } from './Tag'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'

export default {
  title: '6. Components/Typography/Tag',
  render: (args) => Tag(args.content, args.variant, args.iconName),
  argTypes: {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    variant: {
      name: 'Variant',
      control: 'radio',
      options: [
        'light', 'standard', 'dark',
      ]
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames
    },
  },
}

export const Light = {
  args: {
    content: 'Some tag',
    variant: 'light',
    iconName: 'baselstab',
  },
}

export const Standard = {
  args: {
    content: 'Some tag',
    variant: 'standard',
    iconName: 'baselstab',
  },
}

export const Dark = {
  args: {
    content: 'Some tag',
    variant: 'dark',
    iconName: 'baselstab',
  },
}

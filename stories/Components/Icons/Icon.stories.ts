import { Icon } from './Icon'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'

export default {
  title: '6. Components/Icons/Icon',
  render: (args) => Icon(args.iconName),
  argTypes: {
    iconName: {
      name: 'Icon name',
      control: 'select',
      options: IconsIndex.iconNames
    }
  },
}

export const Default = {
  args: {
    iconName: 'baselstab',
  },
}

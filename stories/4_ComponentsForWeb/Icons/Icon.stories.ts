import { Icon } from './Icon'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'

export default {
  title: '4. Components for the web/Icons/Icon',
  render: (args) => Icon(args.iconName),
  argTypes: {
    iconName: {
      name: 'Icon name',
      control: 'select',
      options: IconsIndex.iconNames,
    },
  },
}

export const Default = {
  args: {
    iconName: 'baselstab',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24163-12935&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { Icon } from './Icon'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../helpers/defineStory'

const excludedIconNames = ['arrow-east-thin', 'card', 'map-pin-coloured', 'pin']
const icons = IconsIndex.iconNames.filter(
  (iconName) => !excludedIconNames.includes(iconName)
)
const { StoryDefinition, DefaultStory } = defineStory(
  Icon,
  {
    iconName: {
      name: 'Icon name',
      control: 'select',
      options: icons,
    },
  },
  {
    iconName: 'baselstab',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35230-9084&t=LiBXZz2U0289DuOu-0'
)

export default {
  title: '3. Basics/Icons',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Icons',
}

import { Icon } from './Icon'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Icon,
  {
    iconName: {
      name: 'Icon name',
      control: 'select',
      options: IconsIndex.iconNames,
    },
  },
  {
    iconName: 'baselstab',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24163-12935&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Icons/Icon',
  ...StoryDefinition,
}

export const Default = DefaultStory

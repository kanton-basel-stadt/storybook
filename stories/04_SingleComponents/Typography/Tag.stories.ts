import { Tag } from './Tag'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Tag,
  {
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['standard', 'light', 'dark'],
    },
    content: {
      name: 'Sample content',
      control: 'text',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames,
    },
  },
  {
    variant: 'standard',
    content: 'Some tag',
    iconName: 'baselstab',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '4. Single components/Typography styles/Tag',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Tag',
}

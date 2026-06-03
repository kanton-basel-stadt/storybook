import { Tag } from './Tag'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Tag,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    iconPlacement: {
      name: 'Icon placement',
      options: ['No icon', 'Icon left', 'Icon right', 'Icon only'],
      control: 'radio',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames,
    },
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['Standard', 'Light', 'Dark', 'Red'],
    },
  },
  {
    label: 'My label',
    iconPlacement: 'Icon right',
    iconName: 'check',
    variant: 'Standard',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '4. Single components/Tag',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Tag',
}

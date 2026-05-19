import { Tag } from './Tag'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition } = defineStory(
  Tag,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['light', 'standard', 'dark'],
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames,
    },
  },
  {},
  null
)

export default {
  title: '4. Single components/Typography styles/Tag',
  ...StoryDefinition,
}

export const Light = {
  args: {
    content: 'Some tag',
    variant: 'light',
    iconName: 'baselstab',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4',
    },
  },
}

export const Standard = {
  args: {
    content: 'Some tag',
    variant: 'standard',
    iconName: 'baselstab',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4',
    },
  },
}

export const Dark = {
  args: {
    content: 'Some tag',
    variant: 'dark',
    iconName: 'baselstab',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4',
    },
  },
}

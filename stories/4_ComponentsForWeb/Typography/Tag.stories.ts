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
  title: '5. Components for the web/Typography/Tag',
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
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System?node-id=23980-16818&t=B9MJv5oNO1xT39Yb-4',
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
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System?node-id=23980-16818&t=B9MJv5oNO1xT39Yb-4',
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
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System?node-id=23980-16818&t=B9MJv5oNO1xT39Yb-4',
    },
  },
}

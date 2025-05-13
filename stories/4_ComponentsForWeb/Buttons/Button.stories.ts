import { Button } from './Button'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Button,
  {
    label: {
      name: 'Text label',
      control: 'text',
    },
    iconName: {
      name: 'Icon',
      control: 'select',
      options: IconsIndex.iconNames,
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
      options: [
        'Link',
        'Limited',
        'Strong',
        'Super',
        'Action',
        'Feedback',
        'Prev',
        'Next',
        'Close',
        'Add',
        'Reload',
        'Check',
        'Success',
        'Failure',
      ],
      control: 'multi-select',
    },
  },
  {
    label: 'Click me!',
    iconName: 'baselstab',
    iconPlacement: 'Icon left',
    size: 'Standard',
    types: [],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System?node-id=23980-16818&t=B9MJv5oNO1xT39Yb-4'
)

export default {
  title: '5. Components for the web/Buttons/Button',
  ...StoryDefinition,
}

export const Default = DefaultStory

import { SuperButton } from './SuperButton'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  SuperButton,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    decorator: {
      name: 'Decorator',
      options: ['Link', 'Prev', 'Next', 'Close', 'Add', 'Reload', 'Check'],
      control: 'radio',
    },
    flavour: {
      name: 'Flavour',
      options: ['No flavour', 'Strong', 'Feedback', 'Success', 'Failure'],
      control: 'radio',
    },
  },
  {
    label: 'Click me!',
    decorator: 'Link',
    flavour: 'No flavour',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24154-24737'
)

export default {
  title: '4. Single components/Buttons/Super',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Super',
}

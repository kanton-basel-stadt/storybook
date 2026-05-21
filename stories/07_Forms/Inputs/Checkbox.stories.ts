import { Checkbox } from './Checkbox'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Checkbox,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Target href',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'Id',
      control: 'text',
    },
  },
  {
    label: 'Click me!',
    value: 'yes',
    name: 'my-checkbox',
    id: 'checkbox-123',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24420-67804&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/Checkbox',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Checkbox',
}

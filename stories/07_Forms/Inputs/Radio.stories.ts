import { Radio } from './Radio'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Radio,
  {
    fieldState: {
      name: 'Field state',
      control: 'radio',
      options: ['default', 'inactive', 'validated', 'error'],
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Value',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'ID',
      control: 'text',
    },
  },
  {
    fieldState: 'default',
    label: 'My label',
    value: 'option-a',
    name: 'demo-radio',
    id: 'radio-demo',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24420-67804&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/Radio',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Radio',
}

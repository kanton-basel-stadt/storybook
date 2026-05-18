import { ToggleSwitch } from './ToggleSwitch'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  ToggleSwitch,
  {
    label: {
      name: 'Label',
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
    isReversed: {
      name: 'Is reversed?',
      control: 'boolean',
    },
  },
  {
    label: 'Click me!',
    value: 'yes',
    name: 'my-toggle',
    id: 'toggle-123',
    isReversed: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24420-67803&t=w3NqFs5FkutCgMQS-4'
)

export default {
  title: '7. Forms/Inputs/Toggle switch',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Toggle switch',
}

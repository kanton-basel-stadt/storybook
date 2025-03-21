import { ToggleSwitch } from './ToggleSwitch'

import defineStory from '../../../../helpers/defineStory'

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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Inputs/Toggle switch',
  ...StoryDefinition,
}

export const Default = DefaultStory

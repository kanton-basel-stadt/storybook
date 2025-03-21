import { Checkbox } from './Checkbox'
import defineStory from '../../../../helpers/defineStory'

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
      name: 'ID',
      control: 'text',
    },
  },
  {
    label: 'Click me!',
    value: 'yes',
    name: 'my-checkbox',
    id: 'checkbox-123',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Inputs/Checkbox',
  ...StoryDefinition,
}

export const Default = DefaultStory

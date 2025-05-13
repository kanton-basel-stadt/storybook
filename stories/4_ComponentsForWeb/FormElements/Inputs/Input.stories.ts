import { Input } from './Input'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Input,
  {
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
    type: {
      name: 'Type',
      control: 'select',
      options: ['text', 'date', 'number', 'email', 'password', 'tel', 'week'],
    },
  },
  {
    label: 'Label',
    value: '',
    name: 'my-input',
    id: 'input-123',
    type: 'text',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Form elements/Inputs/Input',
  ...StoryDefinition,
}

export const Default = DefaultStory

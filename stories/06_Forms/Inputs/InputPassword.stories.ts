import { Input } from './Input'
import defineStory from '../../../helpers/defineStory'

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
      name: 'Id',
      control: 'text',
    },
    type: {
      name: 'Type',
      control: 'radio',
      options: ['text', 'date', 'email', 'password', 'tel', 'week'],
      table: {
        disable: true,
      },
    },
  },
  {
    label: 'Label',
    value: 'VerySimplePassord123',
    name: 'my-input',
    id: 'input-123',
    type: 'password',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8603&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '6. Forms/Inputs/Password',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Password',
}

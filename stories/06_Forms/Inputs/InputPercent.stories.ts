import { InputPercent } from './InputPercent'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  InputPercent,
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
  },
  {
    label: 'My label',
    value: '12.5',
    name: 'my-input',
    id: 'input-123',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8603&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '6. Forms/Inputs/Percent',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Percent',
}

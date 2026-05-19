import { Slider } from './Slider'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Slider,
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
  },
  {
    label: 'Slide me (needs logic provided by you to properly work)!',
    name: 'my-checkbox',
    id: 'checkbox-123',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-98960&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '7. Forms/Inputs/Slider',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Slider',
}

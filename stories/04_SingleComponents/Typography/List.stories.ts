import { List } from './List'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  List,
  {
    type: {
      name: 'Type',
      control: 'radio',
      options: ['ordered', 'unordered'],
    },
  },
  {
    type: 'unordered',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-20978&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '4. Single components/Typography styles/Bullet and numbered lists',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Bullet and numbered lists',
}

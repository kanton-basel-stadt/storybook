import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Title,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    level: {
      name: 'Heading level',
      control: 'radio',
      options: ['h1', 'h2', 'h3'],
    },
  },
  {
    content: loremIpsum(),
    level: 'h1',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=1125-15870&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '4. Single components/Typography styles/Title',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Title',
}

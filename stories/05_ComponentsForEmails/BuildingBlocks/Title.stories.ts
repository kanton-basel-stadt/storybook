import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Title,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
  },
  {
    title: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for emails/Building blocks/Title',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Title',
}

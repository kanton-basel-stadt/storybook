import { SystemError } from './SystemError'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  SystemError,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
  {
    title: 'Some title',
    content: loremIpsum({ count: 3 }),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24906-8340&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '7. Forms/Building blocks/System error',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'System error',
}

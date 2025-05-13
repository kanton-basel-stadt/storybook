import { ResultBox } from './ResultBox'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  ResultBox,
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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24379-25839&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Form elements/Building blocks/Result box',
  ...StoryDefinition,
}

export const Default = DefaultStory

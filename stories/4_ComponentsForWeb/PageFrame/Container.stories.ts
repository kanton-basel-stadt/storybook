import { Container } from './Container'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Container,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    isWide: {
      name: 'Is wide?',
      control: 'boolean',
    },
  },
  {
    content: loremIpsum(),
    isWide: false,
  },
  null
)

export default {
  title: '4. Components for the web/Page Frame/Container',
  ...StoryDefinition,
}

export const Default = DefaultStory

import { SearchResponse } from './SearchResponse'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  SearchResponse,
  {
    alvaResponse: {
      name: "Alva's response",
      control: 'text',
    },
    showConsentBox: {
      name: 'Show consent box?',
      control: 'boolean',
    },
  },
  {
    alvaResponse: loremIpsum({ count: 15 }),
    showConsentBox: false,
  },
  'https://www.figma.com/design/NSk9SHyBS4rLSJGRgQHJl8/Basel-GPT-(Alva)?node-id=1370-56252'
)

export default {
  title: '5. Components for the web/Alva/Search response',
  ...StoryDefinition,
}

export const Default = DefaultStory

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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28233-22965&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '5. Combined components/Alva/Search response',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Search response',
}

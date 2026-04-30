import { MatchesElsewhere } from './MatchesElsewhere'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  MatchesElsewhere,
  {
    searchTerm: {
      name: 'Search term',
      control: 'text',
    },
    searchLocations: {
      name: 'Search results',
      control: 'object',
    },
  },
  {
    searchTerm: loremIpsum(),
    searchLocations: [
      {
        name: loremIpsum(),
        count: 0,
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: 1,
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: 2,
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: 3,
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: 4,
        url: 'https://www.bs.ch',
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13188&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Search/Matches elsewhere box',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Matches elsewhere box',
}

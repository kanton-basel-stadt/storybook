import { NoResults } from './NoResults'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  NoResults,
  {
    correctedSearchTerm: {
      name: 'Corrected search term',
      control: 'text',
    },
    didYouMeanUrl: {
      name: 'URL for "Did you mean"',
      control: 'text',
    },
    removeFiltersUrl: {
      name: 'URL for removing filters',
      control: 'text',
    },
  },
  {
    correctedSearchTerm: loremIpsum(),
    didYouMeanUrl:
      'https://www.bs.ch/suche?text=' + encodeURIComponent(loremIpsum()),
    removeFiltersUrl: 'https://www.bs.ch/suche',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13190&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Search/No results section',
  ...StoryDefinition,
}

export const Default = DefaultStory

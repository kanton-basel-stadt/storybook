import { NoResults } from './NoResults'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Search/No results section',
  render: (args) =>
    NoResults(
      args.correctedSearchTerm,
      args.didYouMeanUrl,
      args.removeFiltersUrl
    ),
  argTypes: {
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
}

export const Default = {
  args: {
    correctedSearchTerm: loremIpsum(),
    didYouMeanUrl:
      'https://www.bs.ch/suche?text=' + encodeURIComponent(loremIpsum()),
    removeFiltersUrl: 'https://www.bs.ch/suche',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13190&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { MatchesElsewhere } from './MatchesElsewhere'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Search/Matches elsewhere box',
  render: (args) => MatchesElsewhere(args.searchTerm, args.searchLocations),
  argTypes: {
    searchTerm: {
      name: 'Search term',
      control: 'text',
    },
    searchLocations: {
      name: 'Search results',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
    searchTerm: loremIpsum(),
    searchLocations: [
      {
        name: loremIpsum(),
        count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        url: 'https://www.bs.ch',
      },
      {
        name: loremIpsum(),
        count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        url: 'https://www.bs.ch',
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13188&t=FznYmIANb8uB5p92-1',
    },
  },
}

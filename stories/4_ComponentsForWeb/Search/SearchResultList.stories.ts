import { SearchResultList } from './SearchResultList'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

function getEmLoremIpsum() {
  const text = loremIpsum()
  return text
    .split(' ')
    .map((w) => (Math.random() > 0.8 ? `<em>` + w + '</em>' : w))
    .join(' ')
}

function getBreadcrumbs() {
  return loremIpsum({
    count: Math.floor(Math.random() * (8 - 2 + 1) + 2),
    units: 'words',
  }).split(' ')
}

const { StoryDefinition, DefaultStory } = defineStory(
  SearchResultList,
  {
    searchResults: {
      name: 'Search results',
      control: 'object',
    },
  },
  {
    searchResults: [
      {
        title: loremIpsum(),
        url: '/' + loremIpsum({ count: 1, units: 'words' }),
        breadcrumbs: ['bs.ch', ...getBreadcrumbs()],
        text: getEmLoremIpsum(),
      },
      {
        title: loremIpsum(),
        url: '/' + loremIpsum({ count: 1, units: 'words' }),
        breadcrumbs: ['bs.ch', ...getBreadcrumbs()],
        text: getEmLoremIpsum(),
      },
      {
        title: loremIpsum(),
        url: '/' + loremIpsum({ count: 1, units: 'words' }),
        breadcrumbs: ['bs.ch', ...getBreadcrumbs()],
        text: getEmLoremIpsum(),
      },
      {
        title: loremIpsum(),
        url: '/' + loremIpsum({ count: 1, units: 'words' }),
        breadcrumbs: ['bs.ch', ...getBreadcrumbs()],
        text: getEmLoremIpsum(),
      },
      {
        title: loremIpsum(),
        url: '/' + loremIpsum({ count: 1, units: 'words' }),
        breadcrumbs: ['bs.ch', ...getBreadcrumbs()],
        text: getEmLoremIpsum(),
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13190&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Search/Search result list',
  ...StoryDefinition,
}

export const Default = DefaultStory

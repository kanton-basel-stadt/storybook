import { FrequentlyAsked } from './FrequentlyAsked'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  FrequentlyAsked,
  {
    links: {
      name: 'Links',
      control: 'object',
    },
  },
  {
    links: [
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/foobar.pdf',
      },
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/',
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22758&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Sections/Frequently asked box',
  ...StoryDefinition,
}

export const Default = DefaultStory

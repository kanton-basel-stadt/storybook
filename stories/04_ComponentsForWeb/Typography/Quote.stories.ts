import { loremIpsum } from 'lorem-ipsum'
import { Quote } from './Quote'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Quote,
  {
    title: {
      name: 'Quote title',
      control: 'text',
    },
    quote: {
      name: 'Quote text',
      control: 'text',
    },
    imageUrl: {
      name: 'URL for the image (for full responsiveness, provide srcset in the <img> tag)',
      control: 'text',
    },
    name: {
      name: 'Author name',
      control: 'text',
    },
    role: {
      name: 'Author role',
      control: 'text',
    },
    quoteSourceTitle: {
      name: 'Quote source title (optional)',
      control: 'text',
    },
    quoteSourceUrl: {
      name: 'Quote source URL (optional; link when set)',
      control: 'text',
    },
  },
  {
    title: loremIpsum(),
    quote: loremIpsum({ count: 10 }),
    imageUrl: 'https://thispersondoesnotexist.com',
    name: 'Jackie Muster',
    role: 'Head of Sales',
    quoteSourceTitle: 'Kanton Basel-Stadt',
    quoteSourceUrl: 'https://www.bs.ch',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58026&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Typography/Quote',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Quote',
}

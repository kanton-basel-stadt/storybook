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
  },
  {
    title: loremIpsum(),
    quote: loremIpsum({ count: 10 }),
    imageUrl: 'https://thispersondoesnotexist.com',
    name: 'Jackie Example',
    role: 'Head of Examples',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58026&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Typography/Quote',
  ...StoryDefinition,
}

export const Default = DefaultStory

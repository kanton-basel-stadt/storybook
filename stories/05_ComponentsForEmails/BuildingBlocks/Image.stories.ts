import { Image } from './Image'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Image,
  {
    imageUrl: {
      name: 'Image URL',
      control: 'text',
    },
    imageAlt: {
      name: 'Image alternative text',
      control: 'text',
    },
    copyRight: {
      name: 'Image copyright notice',
      control: 'text',
    },
  },
  {
    imageUrl: 'https://placehold.co/1040x585',
    copyRight: 'Copyright 2024 bs.ch',
    imageAlt: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for emails/Building blocks/Image',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Image',
}

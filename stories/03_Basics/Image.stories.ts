import { Image } from './Image'
import defineStory from '../../helpers/defineStory'
import { loremIpsum } from 'lorem-ipsum'

const { StoryDefinition, DefaultStory } = defineStory(
  Image,
  {
    imageUrlXl: {
      name: 'Image URL for XL',
      control: 'text',
    },
    imageUrlLg: {
      name: 'Image URL for LG',
      control: 'text',
    },
    imageUrlMd: {
      name: 'Image URL for MD',
      control: 'text',
    },
    imageUrlSm: {
      name: 'Image URL for SM',
      control: 'text',
    },
    imageCaption: {
      name: 'Image caption',
      control: 'text',
    },
    imageAlt: {
      name: 'Image alt',
      control: 'text',
    },
    imageCopyRight: {
      name: 'Image copyright',
      control: 'text',
    },
  },
  {
    imageUrlXl: 'https://placehold.co/1680x945',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlSm: 'https://placehold.co/400x225',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24248-29391&t=X9o1P2rMKubjFPHG-0'
)

export default {
  title: '3. Basics/Image sizes',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Image sizes',
}

import { Gallery } from './Gallery'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Gallery,
  {
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['white', 'green', 'blue'],
    },
    title: {
      name: 'Title',
      control: 'text',
    },
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
    variant: 'white',
    title: loremIpsum(),
    imageUrlXl: 'https://placehold.co/1680x945',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlSm: 'https://placehold.co/400x225',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24564-18369&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Gallery',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Gallery',
}

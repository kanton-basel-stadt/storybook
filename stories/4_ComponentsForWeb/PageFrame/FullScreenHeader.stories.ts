import { FullScreenHeader } from './FullScreenHeader'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  FullScreenHeader,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    lead: {
      name: 'Lead text',
      control: 'text',
    },
    imageUrlSm: {
      name: 'Image URL for SM',
      control: 'text',
    },
    imageUrlMd: {
      name: 'Image URL for MD',
      control: 'text',
    },
    imageUrlLg: {
      name: 'Image URL for LG',
      control: 'text',
    },
    imageUrlXl: {
      name: 'Image URL for XL',
      control: 'text',
    },
    imageCaption: {
      name: 'Image caption',
      control: 'text',
    },
  },
  {
    title: loremIpsum(),
    lead: loremIpsum({ count: 4 }),
    imageUrlSm: 'https://placehold.co/400x800',
    imageUrlMd: 'https://placehold.co/800x800',
    imageUrlLg: 'https://placehold.co/1024x1024',
    imageUrlXl: 'https://placehold.co/1680x1680',
    imageCaption: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=6537-93868&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Page Frame/Full screen header',
  ...StoryDefinition,
}

export const Default = DefaultStory

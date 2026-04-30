import { Teaser } from './Teaser'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Teaser,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    url: {
      name: 'URL',
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
    description: loremIpsum({ count: 2 }),
    url: 'https://www.bs.ch/',
    imageUrlSm: 'https://placehold.co/382x215',
    imageUrlMd: 'https://placehold.co/224x126',
    imageUrlLg: 'https://placehold.co/252x142',
    imageUrlXl: 'https://placehold.co/334x188',
    imageCaption: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=24248-22760&t=Czf6ufotzznVEA1h-0'
)

export default {
  title: '4. Components for the web/Teasers/Teaser',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Teaser',
}

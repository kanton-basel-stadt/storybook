import { ContactTeaser } from './ContactTeaser'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  ContactTeaser,
  {
    mapImageUrl: {
      name: 'Map image URL',
      control: 'text',
    },
    addressTitle: {
      name: 'Address title',
      control: 'text',
    },
    addressLine1: {
      name: 'Address line 1',
      control: 'text',
    },
    addressLine2: {
      name: 'Address line 2',
      control: 'text',
    },
    email: {
      name: 'Email address',
      control: 'text',
    },
    phone: {
      name: 'Phone number',
      control: 'text',
    },
    linkUrl: {
      name: 'Link URL',
      control: 'text',
    },
    linkLabel: {
      name: 'Link label',
      control: 'text',
    },
  },
  {
    mapImageUrl: 'https://placehold.co/534x160',
    addressTitle: loremIpsum({ count: 3, units: 'words' }),
    addressLine1: loremIpsum({ count: 3, units: 'words' }),
    addressLine2: loremIpsum({ count: 3, units: 'words' }),
    email: 'info@bs.ch',
    phone: '+41 123 45 67',
    linkUrl: 'https://www.bs.ch',
    linkLabel: loremIpsum({ count: 2, units: 'words' }),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for emails/Building blocks/Contact teaser',
  ...StoryDefinition,
}

export const Default = DefaultStory

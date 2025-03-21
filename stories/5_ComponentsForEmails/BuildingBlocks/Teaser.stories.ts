import { Teaser } from './Teaser'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Teaser,
  {
    titleAboveImage: {
      name: 'Title above image',
      control: 'text',
    },

    title: {
      name: 'Title',
      control: 'text',
    },
    text: {
      name: 'Text',
      control: 'text',
    },
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
    url: {
      name: 'URL',
      control: 'text',
    },
    isTitleGreen: {
      name: 'Title in green?',
      control: 'boolean',
    },
    isButtonPrimary: {
      name: 'Is button primary?',
      control: 'boolean',
    },
    iconUrl: {
      name: 'Icon',
      control: {
        type: 'select',
        labels: {
          'https://www.bs.ch/images/email/button-primary-arrow-right.png':
            'Arrow right, primary',
          'https://www.bs.ch/images/email/button-secondary-arrow-right.png':
            'Arrow right, secondary',
          'https://www.bs.ch/images/email/button-small-arrow-right.png':
            'Small arrow right, secondary',
          'https://www.bs.ch/images/email/button-secondary-email.png':
            'Email, secondary',
          'https://www.bs.ch/images/email/button-secondary-phone.png':
            'Phone, secondary',
          '': 'No icon',
        },
      },
      options: [
        'https://www.bs.ch/images/email/button-primary-arrow-right.png',
        'https://www.bs.ch/images/email/button-secondary-arrow-right.png',
        'https://www.bs.ch/images/email/button-small-arrow-right.png',
        'https://www.bs.ch/images/email/button-secondary-email.png',
        'https://www.bs.ch/images/email/button-secondary-phone.png',
        '',
      ],
    },
  },
  {
    titleAboveImage: loremIpsum(),
    title: loremIpsum(),
    text: loremIpsum(),
    imageUrl: 'https://placehold.co/1040x585',
    imageAlt: loremIpsum(),
    copyRight: 'Copyright 2024 bs.ch',
    url: 'https://www.bs.ch',
    isButtonPrimary: true,
    isTitleGreen: false,
    iconUrl: 'https://www.bs.ch/images/email/button-primary-arrow-right.png',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for emails/Building blocks/Teaser',
  ...StoryDefinition,
}

export const Default = DefaultStory

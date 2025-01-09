import { Teaser } from './Teaser'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Teaser',
  render: (args) =>
    Teaser(
      args.titleAboveImage,
      args.title,
      args.text,
      args.imageUrl,
      args.copyRight,
      args.url,
      args.isButtonPrimary,
      args.isTitleGreen,
      args.iconUrl
    ),
  argTypes: {
    titleAboveImage: {
      name: 'Title above image',
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
    copyRight: {
      name: 'Image copyright notice',
      control: 'text',
    },
    url: {
      name: 'URL',
      control: 'text',
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
}

export const Default = {
  args: {
    titleAboveImage: loremIpsum(),
    isTitleGreen: false,
    isButtonPrimary: true,
    title: loremIpsum(),
    text: loremIpsum(),
    imageUrl: 'https://placehold.co/1040x585',
    copyRight: 'Copyright 2024 bs.ch',
    url: 'https://www.bs.ch',
    iconUrl: 'https://www.bs.ch/images/email/button-primary-arrow-right.png',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

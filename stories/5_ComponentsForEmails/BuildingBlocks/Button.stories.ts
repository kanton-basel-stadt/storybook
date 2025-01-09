import { Button } from './Button'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Button',
  render: (args) => Button(args.type, args.label, args.url, args.iconUrl),
  argTypes: {
    type: {
      name: 'Type',
      options: ['primary', 'secondary'],
      control: 'radio',
    },
    label: {
      name: 'Label',
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
          'https://www.bs.ch/images/email/button-primary-arrow-right.png': 'Arrow right, primary',
          'https://www.bs.ch/images/email/button-secondary-arrow-right.png': 'Arrow right, secondary',
          'https://www.bs.ch/images/email/button-small-arrow-right.png': 'Small arrow right, secondary',
          'https://www.bs.ch/images/email/button-secondary-email.png': 'Email, secondary',
          'https://www.bs.ch/images/email/button-secondary-phone.png': 'Phone, secondary',
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
    type: 'primary',
    label: loremIpsum(),
    url: 'https://www.bs.ch',
    iconUrl: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

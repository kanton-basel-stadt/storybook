import { FocusTeaser } from './FocusTeaser'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Teasers/Focus Teaser',
  render: (args) => FocusTeaser(
    args.title,
    args.main,
    args.links,
    args.imageUrlSm,
    args.imageUrlMd,
    args.imageUrlLg,
    args.imageUrlXl,
    args.imageCaption,
    args.imageAlt,
    args.color,
  ),
  argTypes: {
    color: {
      name: 'Color',
      options: ['light', 'dark'],
      control: 'radio',
    },
    title: {
      name: 'Title',
      control: 'text',
    },
    mainUrl: {
      name: 'URL',
      control: 'text',
    },
    links: {
      name: 'Links',
      control: 'object',
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
    imageAlt: {
      name: 'Image alt text',
      control: 'text',
    },
  }
}

export const Default = {
  args: {
    title: loremIpsum(),
    mainUrl: 'https://www.bs.ch/',
    links: [
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/',
      },
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/',
      },
    ],
    imageUrlSm: 'https://placehold.co/382x215',
    imageUrlMd: 'https://placehold.co/224x126',
    imageUrlLg: 'https://placehold.co/252x142',
    imageUrlXl: 'https://placehold.co/334x188',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    color: 'light'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22761&t=FznYmIANb8uB5p92-1',
    }
  }
}







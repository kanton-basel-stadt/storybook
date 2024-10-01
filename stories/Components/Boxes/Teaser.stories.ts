import { Teaser } from './Teaser'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Boxes/Teaser',
  render: (args) => Teaser(
    args.title,
    args.url,
    args.description,
    args.imageUrlSm,
    args.imageUrlMd,
    args.imageUrlLg,
    args.imageUrlXl,
    args.imageCaption,
  ),
  argTypes: {
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
  }
}

export const Default = {
  args: {
    title: loremIpsum(),
    description: loremIpsum({ count: 2, }),
    url: 'https://www.bs.ch/',
    imageUrlSm: 'https://placehold.co/382x215',
    imageUrlMd: 'https://placehold.co/224x126',
    imageUrlLg: 'https://placehold.co/252x142',
    imageUrlXl: 'https://placehold.co/334x188',
    imageCaption: loremIpsum(),
  }
}







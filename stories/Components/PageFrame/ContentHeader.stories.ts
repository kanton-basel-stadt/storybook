import { ContentHeader } from './ContentHeader'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Page Frame/Content header',
  render: (args) => ContentHeader(
    args.title,
    args.lead,
    args.easyToReadUrl,
    args.hasImage,
    args.imageUrlSm,
    args.imageUrlMd,
    args.imageUrlLg,
    args.imageUrlXl,
    args.imageCaption,
    args.imageCopyRight
  ),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    lead: {
      name: 'Lead text',
      control: 'text',
    },
    easyToReadUrl: {
      name: 'URL for "Leichte Sprache" (if any, button will not render if left empty)',
      control: 'text',
    },
    hasImage: {
      name: 'With image?',
      control: 'boolean',
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
    imageCopyRight: {
      name: 'Image copyright notice',
      control: 'text',
    },
  }
}

export const Default = {
  args: {
    title: loremIpsum(),
    lead: loremIpsum({ count: 4, }),
    easyToReadUrl: 'https://www.bs.ch/',
    hasImage: true,
    imageUrlSm: 'https://placehold.co/400x225',
    imageUrlMd: 'https://placehold.co/728x410',
    imageUrlLg: 'https://placehold.co/796x448',
    imageUrlXl: 'https://placehold.co/1040x585',
    imageCaption: loremIpsum(),
    imageCopyRight: 'Copyright 2024 bs.ch',
  }
}

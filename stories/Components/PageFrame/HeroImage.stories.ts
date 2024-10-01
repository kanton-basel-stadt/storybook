import { HeroImage } from './HeroImage'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Page Frame/Hero image',
  render: (args) => HeroImage(
    args.imageUrl3xl,
    args.imageUrl2xl,
    args.imageUrlXl,
    args.imageUrlLg,
    args.imageUrlMd,
    args.imageUrlSm,
    args.imageUrlXs,
    args.imageCaption,
  ),
  argTypes: {
    imageUrlXs: {
      name: 'Image URL for XS',
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
    imageUrl2xl: {
      name: 'Image URL for 2XL',
      control: 'text',
    },
    imageUrl3xl: {
      name: 'Image URL for 3XL',
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
    imageUrl3xl: 'https://placehold.co/3828x750',
    imageUrl2xl: 'https://placehold.co/2560x750',
    imageUrlXl: 'https://placehold.co/1920x750',
    imageUrlLg: 'https://placehold.co/1680x650',
    imageUrlMd: 'https://placehold.co/1024x650',
    imageUrlSm: 'https://placehold.co/800x650',
    imageUrlXs: 'https://placehold.co/600x550',
    imageCaption: loremIpsum(),
  }
}

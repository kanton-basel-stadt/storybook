import { Gallery } from './Gallery'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Gallery',
  render: (args) => Gallery(
    args.title,
    args.color,
    args.imageUrlSm,
    args.imageUrlMd,
    args.imageUrlLg,
    args.imageUrlXl,
    args.imageCaption,
    args.imageAlt,
    args.imageCopyRight,
  ),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    color: {
      name: 'Color',
      options: ['white', 'green', 'blue'],
      control: 'radio',
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
      name: 'Image caption',
      control: 'text',
    },
    imageCopyRight: {
      name: 'Image caption',
      control: 'text',
    },
  }
}

export const Default = {
  args: {
    title: loremIpsum(),
    color: 'green',
    imageUrlSm: 'https://placehold.co/400x225',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlXl: 'https://placehold.co/1680x945',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24564-18369&t=FznYmIANb8uB5p92-1',
    }
  }
}

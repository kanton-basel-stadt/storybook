import { FullScreenHeader } from './FullScreenHeader'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Page Frame/Full screen header',
  render: (args) =>
    FullScreenHeader(
      args.title,
      args.lead,
      args.imageUrlSm,
      args.imageUrlMd,
      args.imageUrlLg,
      args.imageUrlXl,
      args.imageCaption
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
}

export const Default = {
  args: {
    title: loremIpsum(),
    lead: loremIpsum({ count: 4 }),
    imageUrlSm: 'https://placehold.co/400x800',
    imageUrlMd: 'https://placehold.co/800x800',
    imageUrlLg: 'https://placehold.co/1024x1024',
    imageUrlXl: 'https://placehold.co/1680x1680',
    imageCaption: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=6537-93868&t=FznYmIANb8uB5p92-1',
    },
  },
}

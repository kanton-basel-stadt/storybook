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
      args.url
    ),
  argTypes: {
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
    copyRight: {
      name: 'Image copyright notice',
      control: 'text',
    },
    url: {
      name: 'URL',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    titleAbove: loremIpsum(),
    title: loremIpsum(),
    text: loremIpsum(),
    imageUrl: 'https://placehold.co/1040x585',
    copyRight: 'Copyright 2024 bs.ch',
    url: 'https://www.bs.ch',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { Image } from './Image'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Building blocks/Image',
  render: (args) => Image(args.imageUrl, args.imageAlt, args.copyRight),
  argTypes: {
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
  },
}

export const Default = {
  args: {
    imageUrl: 'https://placehold.co/1040x585',
    copyRight: 'Copyright 2024 bs.ch',
    imageAlt: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

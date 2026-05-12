import { Gallery } from './Gallery'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition } = defineStory(
  Gallery,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    color: {
      name: 'Color',
      control: 'hidden',
    },
    imageUrlXl: {
      name: 'Image URL for XL',
      control: 'text',
    },
    imageUrlLg: {
      name: 'Image URL for LG',
      control: 'text',
    },
    imageUrlMd: {
      name: 'Image URL for MD',
      control: 'text',
    },
    imageUrlSm: {
      name: 'Image URL for SM',
      control: 'text',
    },
    imageCaption: {
      name: 'Image caption',
      control: 'text',
    },
    imageAlt: {
      name: 'Image alt',
      control: 'text',
    },
    imageCopyRight: {
      name: 'Image copyright',
      control: 'text',
    },
  },
  {},
  null
)

export default {
  title: '4. Components for the web/Sections/Gallery',
  ...StoryDefinition,
}

export const White = {
  args: {
    title: loremIpsum(),
    color: 'white',
    imageUrlXl: 'https://placehold.co/1680x945',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlSm: 'https://placehold.co/400x225',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24564-18369&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Green = {
  args: {
    title: loremIpsum(),
    color: 'green',
    imageUrlXl: 'https://placehold.co/1680x945',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlSm: 'https://placehold.co/400x225',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24564-18369&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Blue = {
  args: {
    title: loremIpsum(),
    color: 'blue',
    imageUrlXl: 'https://placehold.co/1680x945',
    imageUrlLg: 'https://placehold.co/1024x576',
    imageUrlMd: 'https://placehold.co/800x450',
    imageUrlSm: 'https://placehold.co/400x225',
    imageCaption: loremIpsum(),
    imageAlt: loremIpsum(),
    imageCopyRight: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24564-18369&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { InformationLinkAttachment } from './InformationLinkAttachment'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  InformationLinkAttachment,
  {
    title: {
      name: 'Section title',
      control: 'text',
    },
    content: {
      name: 'Text content',
      control: 'text',
    },
    links: {
      name: 'Links',
      control: 'object',
    },
    isInverted: {
      name: 'Is Inverted',
      control: 'boolean',
    },
    hideDescription: {
      name: 'Hide Description',
      control: 'boolean',
    },
  },
  {
    title: 'An info box',
    content: loremIpsum({ count: 2 }),
    links: [
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/foobar.pdf',
      },
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/',
      },
    ],
    isInverted: false,
    hideDescription: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-23213&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Boxes/Box (info, links, downloads)',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Box (info, links, downloads)',
}

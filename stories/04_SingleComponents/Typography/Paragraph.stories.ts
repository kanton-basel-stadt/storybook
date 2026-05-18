import { Paragraph } from './Paragraph'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition } = defineStory(
  Paragraph,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    kind: {
      name: 'Kind',
      control: 'select',
      options: ['paragraph', 'small paragraph', 'preheading', 'lead'],
    },
  },
  {},
  null
)

export default {
  title: '4. Single components/Typography styles/Paragraphs',
  ...StoryDefinition,
}

export const Standard = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'paragraph',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Small = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'small paragraph',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Preheading = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'preheading',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Lead = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'lead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

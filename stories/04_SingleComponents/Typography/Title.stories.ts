import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition } = defineStory(
  Title,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    kind: {
      name: 'Heading level',
      control: 'select',
      options: ['h1', 'h2', 'h3'],
    },
  },
  {},
  null
)

export default {
  title: '4. Single components/Typography styles/Title',
  ...StoryDefinition,
}

export const Heading1 = {
  args: {
    content: loremIpsum(),
    kind: 'h1',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Heading2 = {
  args: {
    content: loremIpsum(),
    kind: 'h2',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Heading3 = {
  args: {
    content: loremIpsum(),
    kind: 'h3',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { List } from './List'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition } = defineStory(
  List,
  {
    kind: {
      name: 'Kind',
      control: 'select',
      options: ['ordered', 'unordered'],
    },
  },
  {},
  null
)

export default {
  title: '4. Single components/Typography styles/Lists',
  ...StoryDefinition,
}

export const Ordered = {
  args: {
    kind: 'ordered',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const Unordered = {
  args: {
    kind: 'unordered',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1',
    },
  },
}

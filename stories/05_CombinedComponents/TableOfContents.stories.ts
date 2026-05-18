import { TableOfContents } from './TableOfContents'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  TableOfContents,
  {
    content: {
      name: 'Links (JSON Object)',
      control: 'object',
    },
  },
  {
    content: [
      {
        label: 'Hello',
        target: '#hello',
      },
      {
        label: 'World',
        target: '#world',
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-8495&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Table of contents',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Table of contents',
}

import { LayoutSection } from './LayoutSection'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  LayoutSection,
  {
    title: {
      name: 'Section title',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
  {
    title: 'A layout section',
    content: loremIpsum(),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22758&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Sections/Layout section',
  ...StoryDefinition,
}

export const Default = DefaultStory

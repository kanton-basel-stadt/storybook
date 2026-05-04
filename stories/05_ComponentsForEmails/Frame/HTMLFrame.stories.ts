import { HTMLFrame } from './HTMLFrame'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HTMLFrame,
  {
    content: {
      name: 'Content',
      control: 'text',
    },
  },
  {
    content:
      'This is everything you need to set up an HTML Email. It contains all header tags, etc. Start by copying the markup of this component.',
  },
  null
)

export default {
  title: '5. Components for emails/Frame/HTML frame',
  ...StoryDefinition,
}
export const Default = {
  ...DefaultStory,
  name: 'HTML frame',
}

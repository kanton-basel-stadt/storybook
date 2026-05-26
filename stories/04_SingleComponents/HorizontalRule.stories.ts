import { HorizontalRule } from './HorizontalRule'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HorizontalRule,
  {},
  {},
  null
)

export default {
  title: '4. Single components/Horizontal rule',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Horizontal rule',
}

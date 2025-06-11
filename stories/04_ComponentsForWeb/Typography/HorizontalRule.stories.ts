import { HorizontalRule } from './HorizontalRule'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HorizontalRule,
  {},
  {},
  null
)

export default {
  title: '4. Components for the web/Typography/Horizontal Rule',
  ...StoryDefinition,
}

export const Default = DefaultStory

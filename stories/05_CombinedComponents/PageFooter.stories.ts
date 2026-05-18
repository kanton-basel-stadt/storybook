import { PageFooter } from './PageFooter'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  PageFooter,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24266-22407&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Page footer',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Page footer',
}

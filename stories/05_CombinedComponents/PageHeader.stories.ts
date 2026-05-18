import { PageHeader } from './PageHeader'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  PageHeader,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24266-110989&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Page header',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Page header',
}

import { NotFound } from './NotFound'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  NotFound,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-17857&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '7. Templates/Not found page',
  ...StoryDefinition,
}
export const Default = {
  ...DefaultStory,
  name: 'Not found page',
}

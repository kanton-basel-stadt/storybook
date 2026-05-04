import defineStory from '../../helpers/defineStory'
import { Forms } from './Forms'

const { StoryDefinition, DefaultStory } = defineStory(
  Forms,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-17857&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '6. Showcase pages/Forms',
  ...StoryDefinition,
}
export const Default = {
  ...DefaultStory,
  name: 'Forms',
}

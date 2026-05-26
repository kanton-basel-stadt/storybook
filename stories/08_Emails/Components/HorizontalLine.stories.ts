import { HorizontalLine } from './HorizontalLine'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HorizontalLine,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '8. Emails/Components/Horizontal line',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Horizontal line',
}

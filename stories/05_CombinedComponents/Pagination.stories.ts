import { Pagination } from './Pagination'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Pagination,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-17225&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Pagination',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Pagination',
}

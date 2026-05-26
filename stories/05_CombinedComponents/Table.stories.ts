import { Table } from './Table'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Table,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-36255&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '5. Combined components/Table',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Table',
}

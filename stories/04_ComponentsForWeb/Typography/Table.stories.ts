import { Table } from './Table'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Table,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28117&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Typography/Table',
  ...StoryDefinition,
}

export const Default = DefaultStory

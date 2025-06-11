import { FileInput } from './FileInput'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  FileInput,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Inputs/File input',
  ...StoryDefinition,
}

export const Default = DefaultStory

import { HeroSearchInput } from './HeroSearchInput'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HeroSearchInput,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-21126&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Search/Hero search input',
  ...StoryDefinition,
}

export const Default = DefaultStory

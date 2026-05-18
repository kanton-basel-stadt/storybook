import { CookieBanner } from './CookieBanner'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  CookieBanner,
  {},
  {},
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24266-16965&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Cookie banner',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Cookie banner',
}

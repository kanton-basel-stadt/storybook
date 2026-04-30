import { SearchHeader } from './SearchHeader'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  SearchHeader,
  {
    isSearchButtonDisabled: {
      name: 'Is search button disabled?',
      control: 'boolean',
    },
  },
  {
    isSearchButtonDisabled: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-13187&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Search/Search header bar',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Search header bar',
}

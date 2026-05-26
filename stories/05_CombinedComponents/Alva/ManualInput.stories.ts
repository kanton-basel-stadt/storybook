import defineStory from '../../../helpers/defineStory'
import { ManualInput } from './ManualInput'

const { StoryDefinition, DefaultStory } = defineStory(
  ManualInput,
  {
    showConsentBox: {
      name: 'Show consent box?',
      control: 'boolean',
    },
  },
  {
    showConsentBox: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=645-11862&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '5. Combined components/Alva/Manual input',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Manual input',
}

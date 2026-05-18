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
  'https://www.figma.com/design/NSk9SHyBS4rLSJGRgQHJl8/Basel-GPT-(Alva)?node-id=1188-6617'
)

export default {
  title: '5. Combined components/Alva/Manual input',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Manual input',
}

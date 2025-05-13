import { EasyToReadButton } from './EasyToReadButton'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  EasyToReadButton,
  {
    url: {
      name: 'URL',
      control: 'text',
    },
  },
  {
    url: 'https://www.bs.ch/',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24266-111886&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Buttons/Button "Leichte Sprache"',
  ...StoryDefinition,
}

export const Default = DefaultStory

import { HelpBox } from './HelpBox'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  HelpBox,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    text: {
      name: 'Text',
      control: 'text',
    },
  },
  {
    title: loremIpsum(),
    text: loremIpsum({ count: 3 }),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24359-23028&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Building blocks/Help box',
  ...StoryDefinition,
}

export const Default = DefaultStory

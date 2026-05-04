import { Text } from './Text'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Text,
  {
    text: {
      name: 'Text',
      control: 'text',
    },
    isBold: {
      name: 'Bold?',
      control: 'boolean',
    },
    isGreen: {
      name: 'Green?',
      control: 'boolean',
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  {
    text: loremIpsum(),
    isBold: false,
    isGreen: false,
    size: 'medium',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for emails/Building blocks/Text',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Text',
}

import { Paragraph } from './Paragraph'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Paragraph,
  {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    type: {
      name: 'Type',
      control: 'radio',
      options: ['standard', 'small', 'pre-heading', 'lead'],
    },
  },
  {
    content: loremIpsum({ count: 10 }),
    type: 'standard',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Single components/Typography styles/Paragraph',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Paragraph',
}

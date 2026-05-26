import { QuestionsBox } from './QuestionsBox'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  QuestionsBox,
  {
    questions: {
      name: 'Questions',
      control: 'object',
    },
    showConsentBox: {
      name: 'Show consent box?',
      control: 'boolean',
    },
  },
  {
    questions: [
      loremIpsum({ count: 1 }),
      loremIpsum({ count: 1 }),
      loremIpsum({ count: 1 }),
    ],
    showConsentBox: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26617&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '5. Combined components/Alva/Questions box',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Questions box',
}

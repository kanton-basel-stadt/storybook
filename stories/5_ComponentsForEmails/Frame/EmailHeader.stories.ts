import { EmailHeader } from './EmailHeader'
import { loremIpsum } from 'lorem-ipsum'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  EmailHeader,
  {
    title: {
      name: 'Email title',
      control: 'text',
    },
    sender: {
      name: 'Email sender',
      control: 'text',
    },
    browserUrl: {
      name: 'URL for in-browser display',
      control: 'text',
    },
  },
  {
    title: loremIpsum(),
    sender: loremIpsum(),
    browserUrl: 'https://www.bs.ch/some-email',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '6. Components for emails/Frame/Email header',
  ...StoryDefinition,
}

export const Default = DefaultStory

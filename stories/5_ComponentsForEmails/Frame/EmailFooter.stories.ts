import { EmailFooter } from './EmailFooter'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  EmailFooter,
  {
    unsubscribeLink: {
      name: 'Unsubscribe link',
      control: 'text',
    },
  },
  {
    unsubscribeLink: 'https://www.bs.ch/',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '6. Components for emails/Frame/Email footer',
  ...StoryDefinition,
}

export const Default = DefaultStory

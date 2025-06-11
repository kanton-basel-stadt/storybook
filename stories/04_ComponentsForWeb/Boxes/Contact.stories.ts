import { Contact } from './Contact'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Contact,
  {
    name: {
      name: 'Name',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    phoneNumber: {
      name: 'Phone number',
      control: 'text',
    },
    emailAddress: {
      name: 'Email address',
      control: 'text',
    },
    additionalInfo: {
      name: 'Additional info',
      control: 'text',
    },
  },
  {
    name: loremIpsum(),
    description: loremIpsum({ count: 2 }),
    phoneNumber: '+41 61 123 45 67',
    emailAddress: 'noreply@bs.ch',
    additionalInfo: loremIpsum({ count: 2 }),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-23213&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Boxes/Contact',
  ...StoryDefinition,
}

export const Default = DefaultStory

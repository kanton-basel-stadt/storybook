import { EventTeaser } from './EventTeaser'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  EventTeaser,
  {
    url: {
      name: 'URL',
      control: 'text',
    },
    title: {
      name: 'Title',
      control: 'text',
    },
    date: {
      name: 'Date',
      control: 'text',
    },
    time: {
      name: 'Time',
      control: 'text',
    },
    venue: {
      name: 'Venue',
      control: 'text',
    },
    imageUrl: {
      name: 'Image URL',
      control: 'text',
    },
    imageCaption: {
      name: 'Image caption',
      control: 'text',
    },
    hasMultiple: {
      name: 'Has multiple occurances?',
      control: 'boolean',
    },
    isRecurring: {
      name: 'Is a recurring event?',
      control: 'boolean',
    },
    hasSignUp: {
      name: 'Has a sign-up link?',
      control: 'boolean',
    },
  },
  {
    url: 'https://www.bs.ch/',
    title: loremIpsum(),
    date: '01. Januar',
    time: 'Ganztags',
    venue: loremIpsum(),
    imageUrl: 'https://placehold.co/309x147',
    imageCaption: loremIpsum(),
    hasMultiple: true,
    isRecurring: true,
    hasSignUp: true,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24445-62190&t=FznYmIANb8uB5p92-1s'
)

export default {
  title: '4. Components for the web/Teasers/Event teaser',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Event teaser',
}

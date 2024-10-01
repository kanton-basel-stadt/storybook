import { EventTeaser } from './EventTeaser'
import { loremIpsum } from 'lorem-ipsum'

/*
  url: string,
  title: string,
  date: string,
  time: string,
  venue: string,
  imageUrl: string,
  imageCaption: string,
  hasMultiple: boolean,
  isRecurring: boolean,
  hasSignUp: boolean
 */

export default {
  title: '6. Components/Boxes/Event teaser',
  render: (args) => EventTeaser(
    args.url,
    args.title,
    args.date,
    args.time,
    args.venue,
    args.imageUrl,
    args.imageCaption,
    args.hasMultiple,
    args.isRecurring,
    args.hasSignUp,
  ),
  argTypes: {
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
  }
}

export const Default = {
  args: {
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
  }
}







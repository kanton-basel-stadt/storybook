import { loremIpsum } from 'lorem-ipsum'
import { EventTeaserList } from './EventTeaserList'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  EventTeaserList,
  {
    teasers: {
      name: 'Teasers',
      control: 'object',
    },
  },
  {
    teasers: [
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 + 1)),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-26650&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '5. Combined components/Teasers/Event teaser list',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Event teaser list',
}

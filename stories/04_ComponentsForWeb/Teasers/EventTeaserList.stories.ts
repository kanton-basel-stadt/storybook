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
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (5 - 0 + 1) + 0),
          units: 'words',
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24445-62190&t=FznYmIANb8uB5p92-1s'
)

export default {
  title: '4. Components for the web/Teasers/Event teaser list',
  ...StoryDefinition,
}

export const Default = DefaultStory

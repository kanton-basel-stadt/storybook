import { EventTeaserParams } from './EventTeaser'
import { loremIpsum } from 'lorem-ipsum'
import { EventTeaserList } from './EventTeaserList'

export default {
  title: '4. Components for the web/Teasers/Event teaser list',
  render: (args: { teasers: EventTeaserParams[] }) =>
    EventTeaserList(args.teasers),
  argTypes: {
    teasers: {
      name: 'Teasers',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
    teasers: [
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
      {
        url: 'https://www.bs.ch/',
        title: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        date: '01. Januar',
        time: 'Ganztags',
        venue: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        imageUrl: 'https://placehold.co/309x147',
        imageCaption: loremIpsum({
          count: Math.floor(Math.random() * (3 - 0 + 1) + 0),
        }),
        hasMultiple: Math.random() > 0.5,
        isRecurring: Math.random() > 0.5,
        hasSignUp: Math.random() > 0.5,
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24445-62190&t=FznYmIANb8uB5p92-1s',
    },
  },
}

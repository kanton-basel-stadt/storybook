import { FrequentlyAsked } from './FrequentlyAsked'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  FrequentlyAsked,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    description: {
      name: 'Description',
      control: 'text',
    },
    links: {
      name: 'Links',
      control: 'object',
    },
  },
  {
    title: 'Häufig gesucht',
    description:
      'Über die folgenden Links haben Sie Zugriff auf häufig gesuchte Dienstleistungen und Informationen zum Thema «Mobilität».',
    links: [
      {
        label: 'Parkkarten',
        url: '/',
      },
      {
        label: 'Wo parkieren?',
        url: '/',
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=30269-16312&t=w3NqFs5FkutCgMQS-4'
)

export default {
  title: '4. Components for the web/Sections/Frequently asked box',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Frequently asked box',
}

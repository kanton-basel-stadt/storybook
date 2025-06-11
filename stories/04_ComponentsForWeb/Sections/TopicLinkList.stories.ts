import { TopicLinkList } from './TopicLinkList'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  TopicLinkList,
  {
    title: {
      name: 'Title',
      control: 'text',
    },
    linkGroups: {
      name: 'Links (JSON Object)',
      control: 'object',
    },
  },
  {
    title: loremIpsum(),
    linkGroups: [
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/',
        iconName: 'baselstab',
        links: [
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
        ],
      },
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/',
        iconName: 'baselstab',
        links: [
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
        ],
      },
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/',
        iconName: 'baselstab',
        links: [
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            url: 'https://www.bs.ch/',
          },
        ],
      },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22759&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Sections/Topic link list',
  ...StoryDefinition,
}

export const Default = DefaultStory

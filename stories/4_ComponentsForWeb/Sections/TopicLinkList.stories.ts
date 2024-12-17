import { TopicLinkList } from './TopicLinkList'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Topic link list',
  render: (args) => TopicLinkList(args.title, args.linkGroups),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    linkGroups: {
      name: 'Links (JSON Object)',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22759&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { InformationLinkAttachment } from './InformationLinkAttachment'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Boxes/Box (info, links, downloads)',
  render: (args) =>
    InformationLinkAttachment(args.title, args.content, args.links),
  argTypes: {
    title: {
      name: 'Section title',
      control: 'text',
    },
    content: {
      name: 'Text content',
      control: 'text',
    },
    links: {
      name: 'Links',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
    title: 'An info box',
    content: loremIpsum({ count: 2 }),
    links: [
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/foobar.pdf',
      },
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/',
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-23213&t=FznYmIANb8uB5p92-1',
    },
  },
}

import { LinkList } from './LinkList'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Link list',
  render: (args) => LinkList(args.links),
  argTypes: {
    links: {
      name: 'Links',
      control: 'object',
    }
  },
}

export const Default = {
  args: {
    links: [
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/foobar.pdf'
      },
      {
        label: loremIpsum(),
        description: loremIpsum({ count: 2 }),
        url: 'https://www.bs.ch/'
      }
    ]
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58028&t=FznYmIANb8uB5p92-1',
    }
  }
}

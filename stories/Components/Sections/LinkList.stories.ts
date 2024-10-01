import { LinkList } from './LinkList'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Sections/Link list',
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
}

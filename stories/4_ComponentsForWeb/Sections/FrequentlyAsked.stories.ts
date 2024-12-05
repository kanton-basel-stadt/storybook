import { FrequentlyAsked } from './FrequentlyAsked'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Frequently asked box',
  render: (args) => FrequentlyAsked(args.links),
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
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22758&t=FznYmIANb8uB5p92-1',
    }
  }
}

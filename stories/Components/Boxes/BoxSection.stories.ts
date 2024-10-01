import { BoxSection } from './BoxSection'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Boxes/Box section',
  render: (args) => BoxSection(args.boxes),
  argTypes: {
    links: {
      name: 'Boxes',
      control: 'object',
    }
  },
}

export const Default = {
  args: {
    boxes: [
      {
        title: loremIpsum(),
        content: loremIpsum({ count: 2 }),
      },
      {
        title: loremIpsum(),
        content: loremIpsum({ count: 2 }),
      },
    ]
  },
}

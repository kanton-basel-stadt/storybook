import { BoxSection } from './BoxSection'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Boxes/Box section',
  render: (args) => BoxSection(args.boxes),
  argTypes: {
    links: {
      name: 'Boxes',
      control: 'object',
    },
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
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-11773&t=FznYmIANb8uB5p92-1',
    },
  },
}

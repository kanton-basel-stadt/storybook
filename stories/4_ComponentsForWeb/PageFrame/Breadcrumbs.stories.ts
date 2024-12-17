import { Breadcrumbs } from './Breadcrumbs'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Page Frame/Breadcrumbs',
  render: (args) => Breadcrumbs(args.links),
  argTypes: {
    links: {
      name: 'Links',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
    links: [
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/1',
      },
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/2',
      },
      {
        label: loremIpsum(),
        url: 'https://www.bs.ch/3',
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-18856&t=FznYmIANb8uB5p92-1',
    },
  },
}

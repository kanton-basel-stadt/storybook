import { Accordion } from './Accordion'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Accordion',
  render: (args) => Accordion(args.title, args.accordions, args.numberOfColumns),
  argTypes: {
    title: {
      name: 'Section title',
      control: 'text',
    },
    accordions: {
      name: 'Accordions (JSON Object)',
      control: 'object',
    },
    numberOfColumns: {
      name: 'Number of columns',
      options: ['1', '2'],
      control: 'radio',
    },
  },
}

export const Default = {
  args: {
    title: 'An accordion section',
    accordions: [
      {
        label: 'First accordion',
        content: loremIpsum({ count: 2 }),
        isOpen: true,
        id: '1st',
        links: [
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/'
          },
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/'
          }
        ]
      },
      {
        label: 'Second accordion',
        content: loremIpsum({ count: 2 }),
        isOpen: false,
        id: '2nd',
        links: [
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/'
          },
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/'
          }
        ]
      },
    ],
    numberOfColumns: 1,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58027&t=FznYmIANb8uB5p92-1',
    }
  }
}

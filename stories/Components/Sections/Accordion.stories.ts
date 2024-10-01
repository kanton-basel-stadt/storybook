import { Accordion } from './Accordion'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Sections/Accordion',
  render: (args) => Accordion(args.title, args.accordions),
  argTypes: {
    title: {
      name: 'Section title',
      control: 'text',
    },
    accordions: {
      name: 'Accordions (JSON Object)',
      control: 'object',
    }
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
    ]
  },
}

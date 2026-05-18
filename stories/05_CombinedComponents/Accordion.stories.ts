import { Accordion } from './Accordion'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Accordion,
  {
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
  {
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
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/',
          },
        ],
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
            url: 'https://www.bs.ch/',
          },
          {
            label: loremIpsum(),
            description: loremIpsum({ count: 2 }),
            url: 'https://www.bs.ch/',
          },
        ],
      },
    ],
    numberOfColumns: 1,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24420-58027&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Accordion',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Accordion',
}

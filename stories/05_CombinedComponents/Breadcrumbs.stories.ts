import { Breadcrumbs } from './Breadcrumbs'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Breadcrumbs,
  {
    links: {
      name: 'Links',
      control: 'object',
    },
  },
  {
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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-18856&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Combined components/Breadcrumbs',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Breadcrumbs',
}

import { BoxSection } from './BoxSection'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  BoxSection,
  {
    links: {
      name: 'Boxes',
      control: 'object',
    },
  },
  {
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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24278-11773&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Boxes/Box section',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Box section',
}

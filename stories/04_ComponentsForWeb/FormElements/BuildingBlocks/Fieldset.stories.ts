import { Fieldset } from './Fieldset'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Fieldset,
  {
    legend: {
      name: 'Legend',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
  {
    legend: 'Some fieldset',
    content: loremIpsum({ count: 3 }),
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24359-23028&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Building blocks/Fieldset',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Fieldset',
}

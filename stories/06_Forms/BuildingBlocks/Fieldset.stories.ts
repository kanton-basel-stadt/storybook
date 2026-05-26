import { Fieldset } from './Fieldset'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=35712-98933&t=uE07ro0CYT8jUMKb-4'
)

export default {
  title: '6. Forms/Building blocks/Fieldset',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Fieldset',
}

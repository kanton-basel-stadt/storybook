import { Textarea } from './Textarea'
import { loremIpsum } from 'lorem-ipsum'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Textarea,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    value: {
      name: 'Value',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    id: {
      name: 'Id',
      control: 'text',
    },
    withIcon: {
      name: 'With bottom-right icon?',
      control: 'boolean',
    },
  },
  {
    label: 'My label',
    value: loremIpsum({ count: 2 }),
    name: 'my-input',
    id: 'input-123',
    withIcon: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8603&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '7. Forms/Inputs/Textarea',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Textarea',
}

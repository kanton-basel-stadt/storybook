import { DropdownSelect } from './DropdownSelect'
import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  DropdownSelect,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    id: {
      name: 'Id',
      control: 'text',
    },
    isOpen: {
      name: 'Is open (You will need to provide this functionality yourself!)',
      control: 'boolean',
    },
    canSelectMultiple: {
      name: 'Can select multiple? (You will need to provide this functionality yourself!)',
      control: 'boolean',
    },
  },
  {
    label: 'Select a value',
    id: 'select-123',
    isOpen: false,
    canSelectMultiple: false,
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System--DDS-?node-id=28822-8559&t=7ckDtzrsJy0SZZlH-4'
)

export default {
  title: '6. Forms/Inputs/Dropdown list',
  ...StoryDefinition,
}

export const Default = {
  ...DefaultStory,
  name: 'Dropdown list',
}

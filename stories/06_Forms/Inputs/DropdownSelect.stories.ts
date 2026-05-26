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
    options: {
      name: 'Options',
      control: 'object',
    },
  },
  {
    label: 'Select a value',
    id: 'select-123',
    isOpen: false,
    canSelectMultiple: false,
    options: [
      { label: 'Value 1', value: 'value-1' },
      { label: 'Value 2', value: 'value-2' },
      { label: 'Value 3', value: 'value-3' },
      { label: 'Value 4', value: 'value-4' },
    ],
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

import { DropdownSelect } from './DropdownSelect'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  DropdownSelect,
  {
    label: {
      name: 'Label',
      control: 'text',
    },
    id: {
      name: 'ID',
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
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24154-30025&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '4. Components for the web/Form elements/Inputs/Dropdown select',
  ...StoryDefinition,
}

export const Default = DefaultStory

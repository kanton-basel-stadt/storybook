import { SelectableMatrix } from './SelectableMatrix'
import defineStory from '../../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  SelectableMatrix,
  {
    rows: {
      name: 'Rows',
      control: 'object',
    },
    columns: {
      name: 'Columns',
      control: 'object',
    },
  },
  {
    rows: [
      { label: 'Vor der Schule', isLarge: false },
      { label: 'Vormittag', isLarge: true },
      { label: 'Über Mittag', isLarge: false },
      { label: 'Nachmittag', isLarge: true },
    ],
    columns: [
      { label: 'Montag' },
      { label: 'Dienstag' },
      { label: 'Mittwoch' },
      { label: 'Donnerstag' },
      { label: 'Freitag' },
    ],
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24658-8831'
)

export default {
  title: '4. Components for the web/Form elements/Inputs/Selectable matrix',
  ...StoryDefinition,
}

export const Default = DefaultStory

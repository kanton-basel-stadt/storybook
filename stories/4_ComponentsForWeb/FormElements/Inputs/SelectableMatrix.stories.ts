import { SelectableMatrix } from './SelectableMatrix'

export default {
  title: '4. Components for the web/Form elements/Inputs/Selectable matrix',
  render: (args) => SelectableMatrix(args.rows, args.columns),
  argTypes: {
    rows: {
      name: 'Rows',
      control: 'object',
    },
    columns: {
      name: 'Columns',
      control: 'object',
    },
  },
}

export const Default = {
  args: {
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24658-8831',
    },
  },
}

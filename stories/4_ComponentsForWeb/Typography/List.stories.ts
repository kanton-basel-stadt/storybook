import { List } from './List'

export default {
  title: '4. Components for the web/Typography/List',
  render: (args) => List(args.kind),
  argTypes: {
    kind: {
      name: 'Kind',
      control: 'select',
      options: ['ordered', 'unordered'],
    },
  },
}

export const OrderedList = {
  args: {
    kind: 'ordered',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1',
    },
  },
}

export const UnorderedList = {
  args: {
    kind: 'unordered',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1',
    },
  },
}

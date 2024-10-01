import { List } from './List'

export default {
  title: '6. Components/Typography/List',
  render: (args) => List(args.kind),
  argTypes: {
    kind: {
      name: 'Kind',
      control: 'select',
      options: [
        'ordered', 'unordered',
      ]
    }
  },
}

export const OrderedList = {
  args: {
    kind: 'ordered',
  },
}

export const UnorderedList = {
  args: {
    kind: 'unordered',
  },
}

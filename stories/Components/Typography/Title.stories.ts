import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Typography/Title',
  render: (args) => Title(args.content, args.kind),
  argTypes: {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    kind: {
      name: 'Heading level',
      control: 'select',
      options: [
        'h1', 'h2', 'h3',
      ]
    }
  },
}

export const Heading1 = {
  args: {
    content: loremIpsum(),
    kind: 'h1',
  },
}

export const Heading2 = {
  args: {
    content: loremIpsum(),
    kind: 'h2',
  },
}

export const Heading3 = {
  args: {
    content: loremIpsum(),
    kind: 'h3',
  },
}

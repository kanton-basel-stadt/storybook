import { Container } from './Container'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Page Frame/Container',
  render: (args) => Container(args.content, args.isWide),
  argTypes: {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    isWide: {
      name: 'Is wide?',
      control: 'boolean',
    }
  },
}

export const Default = {
  args: {
    content: loremIpsum(),
    isWide: false,
  },
}

import { Container } from './Container'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Page Frame/Container',
  render: (args) => Container(args.content),
  argTypes: {
    content: {
      name: 'Sample content',
      control: 'text',
    }
  },
}

export const Default = {
  args: {
    content: loremIpsum(),
  },
}

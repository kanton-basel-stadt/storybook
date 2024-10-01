import { LayoutSection } from './LayoutSection'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Sections/Layout section',
  render: (args) => LayoutSection(args.title, args.content),
  argTypes: {
    title: {
      name: 'Section title',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    }
  },
}

export const Default = {
  args: {
    title: 'An accordion section',
    content: loremIpsum(),
  }
}

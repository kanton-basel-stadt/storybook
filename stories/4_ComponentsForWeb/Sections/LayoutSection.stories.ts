import { LayoutSection } from './LayoutSection'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Sections/Layout section',
  render: (args) => LayoutSection(args.title, args.content),
  argTypes: {
    title: {
      name: 'Section title',
      control: 'text',
    },
    content: {
      name: 'Content',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: 'A layout section',
    content: loremIpsum(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-22758&t=FznYmIANb8uB5p92-1',
    },
  },
}

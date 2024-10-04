import { HelpBox } from './HelpBox'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Form elements/Building blocks/Help box',
  render: (args) => HelpBox(args.title, args.text),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    text: {
      name: 'Text',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: loremIpsum(),
    text: loremIpsum({ count: 3 }),
  },
}

import { Paragraph } from './Paragraph'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '6. Components/Typography/Paragraph',
  render: (args) => Paragraph(args.content, args.kind),
  argTypes: {
    content: {
      name: 'Sample content',
      control: 'text',
    },
    kind: {
      name: 'Kind',
      control: 'select',
      options: [
        'paragraph', 'small paragraph', 'preheading', 'lead',
      ]
    }
  },
}

export const StandardParagraph = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'paragraph',
  },
}

export const SmallParagraph = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'small paragraph',
  },
}

export const Preheading = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'preheading',
  },
}

export const Lead = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'lead',
  },
}

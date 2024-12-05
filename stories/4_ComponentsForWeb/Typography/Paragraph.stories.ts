import { Paragraph } from './Paragraph'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Typography/Paragraph',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

export const SmallParagraph = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'small paragraph',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

export const Preheading = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'preheading',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

export const Lead = {
  args: {
    content: loremIpsum({ count: 10 }),
    kind: 'lead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

import { Title } from './Title'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '4. Components for the web/Typography/Title',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

export const Heading2 = {
  args: {
    content: loremIpsum(),
    kind: 'h2',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

export const Heading3 = {
  args: {
    content: loremIpsum(),
    kind: 'h3',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24248-28115&t=FznYmIANb8uB5p92-1',
    }
  }
}

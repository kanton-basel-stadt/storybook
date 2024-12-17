import { EmailHeader } from './EmailHeader'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: '5. Components for emails/Frame/Email header',
  render: (args) => EmailHeader(args.title, args.sender, args.browserUrl),
  argTypes: {
    title: {
      name: 'Email title',
      control: 'text',
    },
    sender: {
      name: 'Email sender',
      control: 'text',
    },
    browserUrl: {
      name: 'URL for in-browser display',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    title: loremIpsum(),
    sender: loremIpsum(),
    browserUrl: 'https://www.bs.ch/some-email',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

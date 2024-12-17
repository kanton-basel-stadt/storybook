import { EmailFooter } from './EmailFooter'

export default {
  title: '5. Components for emails/Frame/Email footer',
  render: (args) => EmailFooter(args.unsubscribeLink),
  argTypes: {
    unsubscribeLink: {
      name: 'Unsubscribe link',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    unsubscribeLink: 'https://www.bs.ch/',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=21334-1360&t=FznYmIANb8uB5p92-1',
    },
  },
}

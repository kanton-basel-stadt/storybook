import { EasyToReadButton } from './EasyToReadButton'

export default {
  title: '4. Components for the web/Buttons/Button "Leichte Sprache"',
  render: (args) => EasyToReadButton(args.url),
  argTypes: {
    url: {
      name: 'URL',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    url: 'https://www.bs.ch/',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24266-111886&t=FznYmIANb8uB5p92-1',
    }
  }
}

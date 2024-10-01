import { EasyToReadButton } from './EasyToReadButton'

export default {
  title: '6. Components/Buttons/Button "Leichte Sprache"',
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
}

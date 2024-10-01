import { Link } from './Link'

export default {
  title: '6. Components/Typography/Link',
  render: (args) => Link(args.withIcon, args.isInline, args.label, args.href),
  argTypes: {
    withIcon: {
      name: 'With link icon (files, arrows, etc., changes itself based on URL)',
      control: 'boolean',
    },
    isInline: {
      name: 'Is inline link (for use in text)',
      control: 'boolean',
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    href: {
      name: 'Target href',
      control: 'text',
    },
  },
}

export const Default = {
  args: {
    withIcon: false,
    isInline: false,
    label: 'Click me!',
    href: '#',
  },
}




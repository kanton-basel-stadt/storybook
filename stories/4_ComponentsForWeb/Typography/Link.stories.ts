import { Link } from './Link'

export default {
  title: '4. Components for the web/Typography/Link',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1',
    },
  },
}

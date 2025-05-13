import { Link } from './Link'

import defineStory from '../../../helpers/defineStory'

const { StoryDefinition, DefaultStory } = defineStory(
  Link,
  {
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
  {
    withIcon: false,
    isInline: false,
    label: 'Click me!',
    href: '#',
  },
  'https://www.figma.com/design/qtexxHxrzUzRg6olooUEmM/BS-Design-System-(DDS)?node-id=24245-15335&t=FznYmIANb8uB5p92-1'
)

export default {
  title: '5. Components for the web/Typography/Link',
  ...StoryDefinition,
}

export const Default = DefaultStory

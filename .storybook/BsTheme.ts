import { create } from '@storybook/theming/create'
import storybookCss from '../static/css/storybook-built.css?inline'

export default create({
  base: 'light',
  brandTitle: 'bs.ch Design system',
  brandUrl: 'https://kanton-basel-stadt.github.io/designsystem',
  brandImage: '/logo.png',
  brandTarget: '_self',
  fontBase: "'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
  fontCode: 'monospace',
})

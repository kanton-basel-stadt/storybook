import { html } from 'lit'
import { Icon } from './../Icons/Icon'
import { classMap } from 'lit-html/directives/class-map.js'

export const Button = (
  label: string,
  iconName: string,
  iconPlacement: 'No icon' | 'Icon left' | 'Icon right' | 'Icon only',
  size: 'Standard' | 'Small',
  types: ('Link' | 'Strong' | 'Limited' | 'Super' | 'Action' | 'Feedback' | 'Prev' | 'Next' | 'Close' | 'Add' | 'Reload' | 'Check')[]
) => {
  const classes = {
    button: true,
    'is-sm': size === 'Small',
    'is-icon-only': iconPlacement === 'Icon only',
    'is-strong': types.includes('Strong'),
    'is-super': types.includes('Super'),
    'is-action': types.includes('Action'),
    'is-feedback': types.includes('Feedback'),
    'is-prev': types.includes('Prev'),
    'is-next': types.includes('Next'),
    'is-close': types.includes('Close'),
    'is-add': types.includes('Add'),
    'is-reload': types.includes('Reload'),
    'is-check': types.includes('Check'),
    'is-link': types.includes('Link'),
    'is-limited': types.includes('Limited'),
  }

  return html`
    <button class="${classMap(classes)}">
      ${iconPlacement === 'Icon left' || iconPlacement === 'Icon only' ? Icon(iconName) : ''}
      ${iconPlacement === 'Icon only' ? '' : label}
      ${iconPlacement === 'Icon right' ? Icon(iconName) : ''}
    </button>
  `
}

import { html } from 'lit'
import { Icon } from '../Icons/Icon'
import { classMap } from 'lit-html/directives/class-map.js'

export const Button = (
  label: string,
  iconName: string,
  iconPlacement: 'No icon' | 'Icon left' | 'Icon right' | 'Icon only',
  size: 'Standard' | 'Small',
  decorator: (
    | 'Link'
    | 'Prev'
    | 'Next'
    | 'Close'
    | 'Add'
    | 'Reload'
    | 'Check'
  )[],
  flavour: ('Strong' | 'Feedback' | 'Success' | 'Failure')[],
  styles: ('Limited' | 'Super' | 'Action')[]
) => {
  const classes = {
    button: true,
    'is-sm': size === 'Small',
    'is-icon-only': iconPlacement === 'Icon only',
    'is-strong': flavour.includes('Strong'),
    'is-super': styles.includes('Super'),
    'is-action': styles.includes('Action'),
    'is-feedback': flavour.includes('Feedback'),
    'is-prev': decorator.includes('Prev'),
    'is-next': decorator.includes('Next'),
    'is-close': decorator.includes('Close'),
    'is-add': decorator.includes('Add'),
    'is-reload': decorator.includes('Reload'),
    'is-check': decorator.includes('Check'),
    'is-link': decorator.includes('Link'),
    'is-limited': styles.includes('Limited'),
    'is-success': flavour.includes('Success'),
    'is-failure': flavour.includes('Failure'),
  }

  return html`
    <button class="${classMap(classes)}">
      ${iconPlacement === 'Icon left' || iconPlacement === 'Icon only'
        ? Icon(iconName)
        : ''}
      ${iconPlacement === 'Icon only' ? '' : label}
      ${iconPlacement === 'Icon right' ? Icon(iconName) : ''}
    </button>
  `
}

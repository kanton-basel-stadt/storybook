import { html } from 'lit'
import { Icon } from '../Icons/Icon'
import { classMap } from 'lit-html/directives/class-map.js'

export const Button = (
  label: string,
  iconName: string,
  iconPlacement: 'No icon' | 'Icon left' | 'Icon right' | 'Icon only',
  size: 'Standard' | 'Small' | 'Super',
  decorator:
    'No decorator'
    | 'Link'
    | 'Prev'
    | 'Next'
    | 'Close'
    | 'Add'
    | 'Reload'
    | 'Check'
  ,
  flavour: 'No flavour' | 'Strong' | 'Feedback' | 'Success' | 'Failure',
) => {
  const classes = {
    button: true,
    'is-sm': size.includes('Small'),
    'is-super': size.includes('Super'),
    'is-icon-only': iconPlacement.includes('Icon only'),
    'is-strong': flavour.includes('Strong'),
    'is-feedback': flavour.includes('Feedback'),
    'is-prev': decorator.includes('Prev'),
    'is-next': decorator.includes('Next'),
    'is-close': decorator.includes('Close'),
    'is-add': decorator.includes('Add'),
    'is-reload': decorator.includes('Reload'),
    'is-check': decorator.includes('Check'),
    'is-link': decorator.includes('Link'),
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
    <p class="text-xs text-gray-700 mt-30">Notices:<br />
      - The control "Icon" below only propose icons that make sens for a button. We have more icons in the chapter "Icons" of the left menu.<br />
      - Some option combinations do not make much sense, such as using a "Close" decorator with a "Success" flavour.<br />
      - The size "Super" is to be used with the icon placement "No icon" and with a decorator.
    </p>
  `
}

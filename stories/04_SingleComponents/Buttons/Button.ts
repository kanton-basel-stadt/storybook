import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'
import { classMap } from 'lit-html/directives/class-map.js'

export const Button = (
  label: string,
  iconName: string,
  iconPlacement: 'No icon' | 'Icon left' | 'Icon right' | 'Icon only',
  size: 'Standard' | 'Small' | 'Super',
  decorator:
    | 'No decorator'
    | 'Link'
    | 'Prev'
    | 'Next'
    | 'Close'
    | 'Add'
    | 'Reload'
    | 'Check',
  variant: 'Standard' | 'Strong' | 'Feedback' | 'Success' | 'Failure'
) => {
  const classes = {
    button: true,
    'is-sm': size.includes('Small'),
    'is-super': size.includes('Super'),
    'is-icon-only': iconPlacement.includes('Icon only'),
    'is-strong': variant.includes('Strong'),
    'is-feedback': variant.includes('Feedback'),
    'is-prev': decorator.includes('Prev'),
    'is-next': decorator.includes('Next'),
    'is-close': decorator.includes('Close'),
    'is-add': decorator.includes('Add'),
    'is-reload': decorator.includes('Reload'),
    'is-check': decorator.includes('Check'),
    'is-link': decorator.includes('Link'),
    'is-success': variant.includes('Success'),
    'is-failure': variant.includes('Failure'),
  }

  return html`
    <button class="${classMap(classes)}">
      ${iconPlacement === 'Icon left' || iconPlacement === 'Icon only'
        ? Icon(iconName)
        : ''}
      ${iconPlacement === 'Icon only' ? '' : label}
      ${iconPlacement === 'Icon right' ? Icon(iconName) : ''}
    </button>
    <p class="mt-30 text-xs text-gray-700">
      Notices:<br />
      - The control "Icon" below only proposes icons that make sense for a
      button. We have more icons in the chapter "Icons" of the left menu.<br />
      - Some option combinations do not make much sense, such as using a "Close"
      decorator with a "Success" variant.<br />
    </p>
  `
}

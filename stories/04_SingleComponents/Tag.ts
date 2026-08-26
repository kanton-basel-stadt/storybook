import { html } from 'lit'
import { Icon, IconName } from '../03_Basics/Icon'
import { classMap } from 'lit/directives/class-map.js'

export const Tag = (
  label: string,
  iconPlacement: 'No icon' | 'Icon left' | 'Icon right' | 'Icon only',
  iconName: IconName,
  variant: 'Standard' | 'Light' | 'Dark' | 'Red'
) => {
  const classes = {
    tag: true,
    'is-light': variant === 'Light',
    'is-dark': variant === 'Dark',
    'is-red': variant === 'Red',
  }

  return html`
    <div class="${classMap(classes)}">
      ${
        iconPlacement === 'Icon left' || iconPlacement === 'Icon only'
          ? Icon(iconName)
          : ''
      }
      ${iconPlacement === 'Icon only' ? '' : label}
      ${iconPlacement === 'Icon right' ? Icon(iconName) : ''}
    </div>
  `
}

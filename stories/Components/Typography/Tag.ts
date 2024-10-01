import { html } from 'lit'
import { Icon, IconName } from '../Icons/Icon'
import { classMap } from 'lit/directives/class-map.js'

export const Tag = (
  content: string,
  variant: 'light' | 'standard' | 'dark',
  iconName: IconName
) => {
  const classes = {
    'tag': true,
    'is-light': variant === 'light',
    'is-dark': variant === 'dark',
  }

  return html`
    <div class="${classMap(classes)}">
      ${Icon(iconName)}
      ${content}
    </div>
  `
}

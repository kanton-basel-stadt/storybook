import { html } from 'lit'
import { Icon, IconName } from '../../03_Basics/Icon'
import { classMap } from 'lit/directives/class-map.js'

export const Tag = (
  variant: 'light' | 'standard' | 'dark',
  content: string,
  iconName: IconName
) => {
  const classes = {
    tag: true,
    'is-light': variant === 'light',
    'is-dark': variant === 'dark',
  }

  return html`
    <div class="${classMap(classes)}">${Icon(iconName)} ${content}</div>
  `
}

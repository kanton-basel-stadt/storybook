import { html } from 'lit'
import { Icon, IconName } from '../03_Basics/Icon'
import { classMap } from 'lit/directives/class-map.js'

export const Tag = (
  variant: 'light' | 'standard' | 'dark' | 'red',
  content: string,
  iconName: IconName
) => {
  const classes = {
    tag: true,
    'is-light': variant === 'light',
    'is-dark': variant === 'dark',
    'is-red': variant === 'red',
  }

  return html`
    <div class="${classMap(classes)}">${Icon(iconName)} ${content}</div>
    <p class="mt-30 text-xs text-gray-700">
      Notices:<br />
      - A tag <b>is not a button</b> but <b>is a label</b> that only looks like
      a button.<br />
      - The use case is to display an information without any action like a
      click or any effect like a hover.<br />
    </p>
  `
}

import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export const Link = (
  withIcon: boolean,
  isInline: boolean,
  label: string,
  href: string,
) => {
  const classes = {
    link: true,
    'with-icon': withIcon,
    'inline-link': isInline,
  }

  return html`
    <a href="${href}" class="${classMap(classes)}">
      ${label}
    </a>
  `
}

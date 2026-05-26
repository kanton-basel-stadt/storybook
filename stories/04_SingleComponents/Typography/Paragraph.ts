import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export const Paragraph = (
  content: string,
  type: 'pre-heading' | 'lead' | 'standard' | 'small'
) => {
  const classes = {
    p: type === 'standard' || type === 'small',
    'is-small': type === 'small',
    'pre-heading': type === 'pre-heading',
    lead: type === 'lead',
  }

  return html` <p class="${classMap(classes)}">${content}</p> `
}

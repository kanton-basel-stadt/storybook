import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export const Paragraph = (
  content: string,
  kind: 'preheading' | 'lead' | 'paragraph' | 'small paragraph',
) => {
  const classes = {
    p: kind === 'paragraph' || kind === 'small paragraph',
    'is-small': kind === 'small paragraph',
    'pre-heading': kind === 'preheading',
    'lead': kind === 'lead'
  }

  return html`
    <p class="${classMap(classes)}">
      ${content}
    </p>
  `
}

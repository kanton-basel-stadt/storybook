import { html, TemplateResult } from 'lit'
import { classMap } from 'lit-html/directives/class-map.js'

export const Container = (content: TemplateResult, isWide: boolean) => {
  const classes = {
    container: true,
    'is-wide': isWide,
  }

  return html`<div class="${classMap(classes)}">${content}</div>`
}

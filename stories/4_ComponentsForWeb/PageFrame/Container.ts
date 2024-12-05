import { html } from 'lit'

export const Container = (content: string) => {
  return html`
    <div class="container">
      ${content}
    </div>
  `
}

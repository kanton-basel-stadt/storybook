import { html } from 'lit'

export const HelpBox = (title: string, text: string) => {
  return html`
    <div class="help-box">
      <h4 class="!text-purple-800">${title}</h4>
      <p>${text}</p>
    </div>
  `
}

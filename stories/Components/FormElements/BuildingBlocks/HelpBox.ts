import { html } from 'lit'

export const HelpBox = (title: string, text: string) => {
  return html`
    <div class="help-box">
      <h4>
        ${title}
      </h4>
      <p>
        ${text}
      </p>
    </div>
  `
}

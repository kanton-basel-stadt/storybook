import { html, TemplateResult } from 'lit'

export const Fieldset = (legend: string, content: TemplateResult) => {
  return html`
    <fieldset class="fieldset my-20">
      <legend class="fieldset-legend">${legend}</legend>
      ${content}
    </fieldset>
  `
}

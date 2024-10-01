import { html } from 'lit'

export const Fieldset = (
  legend: string,
  content: string,
) => {
  return html`
    <fieldset class="fieldset">
      <legend class="fieldset-legend">${legend}</legend>
      ${content}
    </fieldset>
  `
}

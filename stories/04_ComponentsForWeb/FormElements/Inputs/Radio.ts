import { html } from 'lit'

export const Radio = (
  label: string,
  value: string,
  name: string,
  id: string
) => {
  return html`
    <label for="${id}" class="radio">
      <input type="radio" name="${name}" id="${id}" value="${value}" />
      ${label}
    </label>
  `
}

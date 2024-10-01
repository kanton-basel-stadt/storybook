import { html } from 'lit'

export const Checkbox = (
  label: string,
  value: string,
  name: string,
  id: string,
) => {
  return html`
    <label for="${id}" class="checkbox">
      <input type="checkbox" name="${name}" id="${id}" value="${value}">
      ${label}
    </label>
  `
}

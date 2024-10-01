import { html } from 'lit'

export const Input = (
  label: string,
  value: string,
  name: string,
  id: string,
  type: string,
) => {
  return html`
    <label for="${id}" class="label">
      ${label}
    </label>
    <input type="${type}" name="${name}" id="${id}" value="${value}" class="input">
  `
}

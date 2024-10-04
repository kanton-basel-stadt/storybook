import { html } from 'lit'

export const Textarea = (
  label: string,
  value: string,
  name: string,
  id: string,
) => {
  return html`
    <label for="${id}" class="label">
      ${label}
    </label>
    <textarea name="${name}" id="${id}" class="input w-auto">${value}</textarea>
  `
}

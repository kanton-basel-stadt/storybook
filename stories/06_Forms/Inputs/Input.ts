import { html } from 'lit'
import { fieldMaxClass } from './storyClasses'

export const Input = (
  label: string,
  value: string,
  name: string,
  id: string,
  type: string
) => {
  const labelTpl = html`<label for="${id}" class="label">${label}</label>`

  return html`
    ${labelTpl}
    <input
      type="${type}"
      name="${name}"
      id="${id}"
      value="${value}"
      class="input ${fieldMaxClass}"
    />
  `
}

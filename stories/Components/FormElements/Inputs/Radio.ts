import { html } from 'lit'

export const Radio = (
  label: string,
  value: string,
  name: string,
  id: string,
) => {
  return html`
    <label for="${id}_1" class="radio">
      <input type="radio" name="${name}" id="${id}_1" value="${value}_1">
      ${label} A
    </label>
    <label for="${id}_2" class="radio">
      <input type="radio" name="${name}" id="${id}_2" value="${value}_2">
      ${label} B
    </label>
  `
}

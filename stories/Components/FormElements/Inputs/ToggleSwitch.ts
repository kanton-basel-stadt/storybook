import { html } from 'lit'

export const ToggleSwitch = (
  label: string,
  name: string,
  id: string,
) => {
  return html`
    <input
      type="checkbox"
      class="hidden"
      role="switch"
      id="${id}"
      name="${name}"
      value="false"
    />
    
    <label class="toggle-switch" for="${id}" id="${id}_label">
      ${label}
    </label>
  `
}

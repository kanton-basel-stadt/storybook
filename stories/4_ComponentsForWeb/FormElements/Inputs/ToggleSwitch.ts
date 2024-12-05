import { html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

export const ToggleSwitch = (
  label: string,
  name: string,
  id: string,
  isReversed: boolean
) => {
  const classes = {
    'toggle-switch': true,
    'is-reversed': isReversed,
  }

  return html`
    <input
      type="checkbox"
      class="hidden"
      role="switch"
      id="${id}"
      name="${name}"
      value="false"
    />
    
    <label class="${classMap(classes)}" for="${id}" id="${id}_label">
      ${label}
    </label>
  `
}

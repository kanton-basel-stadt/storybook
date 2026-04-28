import { html, nothing } from 'lit'

import { Icon } from '../../Icons/Icon'

export type RadioFieldState = 'default' | 'inactive' | 'validated' | 'error'

export const Radio = (
  label: string,
  value: string,
  name: string,
  id: string,
  fieldState: RadioFieldState = 'default'
) => {
  const inactive = fieldState === 'inactive'
  const validated = fieldState === 'validated'
  const error = fieldState === 'error'

  return html`
    <label class="radio" data-field-state="${fieldState}">
      <input
        type="radio"
        name="${name}"
        id="${id}"
        value="${value}"
        ?disabled=${inactive}
        ?checked=${validated}
      />
      ${label}
      ${validated
        ? Icon('circle-check', {
            '[&_svg]:size-20': true,
            '[&_svg]:text-green-700': true,
          })
        : nothing}
      ${error
        ? Icon('circle-error', {
            '[&_svg]:size-20': true,
            '[&_svg]:text-red-800': true,
          })
        : nothing}
    </label>
  `
}

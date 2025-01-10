import { html } from 'lit'
import { Icon } from '../../Icons/Icon'

export const Repeater = (legend: string, content: string) => {
  return html`
    <div class="fieldset mb-20">
      <div class="flex items-start justify-between">
        <h3 class="fieldset-legend">${legend}</h3>

        <button aria-label="Entfernen">
          ${Icon('trash', {
            '[&_svg]:size-20': true,
          })}
        </button>
      </div>
      ${content}
    </div>

    <button class="button has-icon-add">
      ${Icon('add', {
        '[&_svg]:size-20': true,
      })}
      Hinzufügen
    </button>
  `
}

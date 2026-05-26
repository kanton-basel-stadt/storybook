import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'

export const SystemError = (title: string, content: string) => {
  return html`
    <div class="rounded-large bg-red-800">
      <div class="container mx-auto pb-20 pt-10">
        <div class="flex items-center justify-between pb-15">
          <h1 class="text-xl font-bold text-white">${title}</h1>

          <button
            type="button"
            class="button is-icon-only"
            aria-label="Schliessen"
          >
            ${Icon('close')}
          </button>
        </div>

        <div class="text-white">${content}</div>
      </div>
    </div>
  `
}

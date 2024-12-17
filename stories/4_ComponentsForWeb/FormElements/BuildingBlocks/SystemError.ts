import { html } from 'lit'
import { Icon } from '../../Icons/Icon'

export const SystemError = (title: string, content: string) => {
  return html`
    <div class="bg-red-800 rounded-large">
      <div class="container mx-auto pt-10 pb-20">
        <div class="flex items-center justify-between pb-15">
          <h1 class="text-xl text-white font-bold">${title}</h1>

          <button class="button is-icon-only">${Icon('close')}</button>
        </div>

        <div class="text-white">${content}</div>
      </div>
    </div>
  `
}

import { Icon } from '../Icons/Icon'
import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

export const Hint = (hints: string[]) => {
  return html`
    <div
      class="mb-30 rounded-large border border-gray-300 bg-green-50 p-20 shadow"
    >
      <div class="grid grid-cols-[auto_1fr] gap-10">
        <div
          class="flex size-20 items-center justify-between rounded-full border-2 border-current pl-2 text-green-700"
        >
          ${Icon('hinweise_no_rounded', {
            'size-[13px]': true,
          })}
        </div>
        <div>
          <legend class="mb-10 text-base font-bold text-green-700">
            Hinweis:
          </legend>
        </div>
      </div>
      ${hints?.length === 1
        ? html`
            <p class="hyphens-auto whitespace-pre-line break-words">
              ${unsafeHTML(hints[0])}
            </p>
          `
        : hints?.length > 1
          ? html`
              <ul class="ml-10 list-disc pl-6">
                ${hints.map(
                  (hint) => html`
                    <li class="hyphens-auto whitespace-pre-line break-words">
                      ${unsafeHTML(hint)}
                    </li>
                  `
                )}
              </ul>
            `
          : ''}
    </div>
  `
}

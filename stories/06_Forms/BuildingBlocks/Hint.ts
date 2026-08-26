import { Icon } from '../../03_Basics/Icon'
import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

export const Hint = (hints: string[]) => {
  const hintClasses = 'hyphens-auto whitespace-pre-line break-words'
  return html`
    <div
      class="mb-30 rounded-large border border-gray-300 bg-green-50 p-20 shadow"
    >
      <div
        class="mb-10 grid grid-cols-[auto_1fr] items-center gap-10 text-green-700"
      >
        <div>
          ${Icon('hinweise_rounded', {
            'size-[20px]': true,
          })}
        </div>
        <div>
          <legend class="text-base font-bold">Hinweis:</legend>
        </div>
      </div>
      ${
        hints?.length === 1
          ? html` <p class="${hintClasses}">${unsafeHTML(hints[0])}</p> `
          : hints?.length > 1
            ? html`
                <ul class="ml-10 list-disc pl-6">
                  ${hints.map(
                    (hint) => html`
                      <li class="${hintClasses}">${unsafeHTML(hint)}</li>
                    `
                  )}
                </ul>
              `
            : ''
      }
    </div>
  `
}

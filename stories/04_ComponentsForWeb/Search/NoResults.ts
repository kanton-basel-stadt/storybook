import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export const NoResults = (
  correctedSearchTerm: string,
  didYouMeanUrl: string,
  removeFiltersUrl: string
) => {
  return html`
    <div class="container relative mb-25 scroll-m-10">
      <div class="mt-20 text-xl">
        Meinten Sie:
        <a
          aria-current="page"
          class="router-link-active router-link-exact-active link font-bold"
          href="${didYouMeanUrl}"
        >
          ${correctedSearchTerm}
        </a>
      </div>
      <div
        aria-live="polite"
        class="mb-40 mt-30 flex min-h-30 flex-wrap items-center justify-between gap-10 text-lg"
      >
        <h3 class="flex min-h-[32px] items-center gap-5 font-bold">
          ${Icon('circle-warning', {
            '[&_svg]:size-20': true,
            '[&_svg]:text-red-800': true,
          })}
          <span>Keine Resultate gefunden</span>
        </h3>
        <a class="button is-sm is-close" href="${removeFiltersUrl}"
          >Filter entfernen</a
        >
      </div>
    </div>
  `
}

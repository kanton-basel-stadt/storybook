import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export const NoResults = (
  correctedSearchTerm: string,
  didYouMeanUrl: string,
  removeFiltersUrl: string
) => {
  return html`
    <div class="container mb-25 scroll-m-10 relative">
      <div class="text-xl mt-20">
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
        class="flex justify-between items-center mt-30 mb-40 text-lg min-h-30 flex-wrap gap-10"
      >
        <h3 class="font-bold flex gap-5 items-center min-h-[32px]">
          ${Icon('circle-warning', {
            '[&>svg]:size-20': true,
            '[&>svg]:text-red-800': true,
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

import { Tag } from '../Typography/Tag'
import { html } from 'lit'

export type EventTeaserParams = {
  url: string
  title: string
  date: string
  time: string
  venue: string
  imageUrl: string
  imageCaption: string
  hasMultiple: boolean
  isRecurring: boolean
  hasSignUp: boolean
}

export const EventTeaser = (args: EventTeaserParams) => {
  return html`
    <a
      href="${args.url}"
      class="group/button row-span-9 grid grid-cols-1 grid-rows-subgrid hyphens-auto"
    >
      <article
        class="row-span-9 grid h-full grid-cols-1 grid-rows-subgrid rounded-large border-2 border-green-100 p-10 pb-15 transition-all duration-250 ease-in-out hover:bg-blue-50"
      >
        <img
          src="${args.imageUrl}"
          sizes="(min-width: 1209px) 310px, (min-width: 1023px) 365px, (min-width: 767px) 331px, (min-width: 479px) 370px"
          width="5315"
          height="2990"
          alt="${args.imageCaption}"
          loading="lazy"
          class="row-start-1 mb-15 w-full rounded"
        />
        <h3 class="row-start-3 mb-10 text-4xl font-bold text-blue-900">
          ${args.title}
        </h3>
        <div class="row-start-2 mb-10 text-2xl font-bold text-green-500">
          ${args.date}
        </div>
        <time class="row-start-4 mb-15 block font-bold text-blue-900"
          >${args.time}</time
        >
        <address
          class="row-start-5 mb-40 block font-bold not-italic text-green-700"
        >
          ${args.venue}
        </address>
        ${args.hasMultiple
          ? html`
              <div class="mb-10">
                ${Tag('Mehrere Termine', 'dark', 'calendar')}
              </div>
            `
          : ''}
        ${args.isRecurring
          ? html`
              <div class="mb-10">
                ${Tag('Fortlaufender Termin', 'standard', 'calendar')}
              </div>
            `
          : ''}
        ${args.hasSignUp
          ? html`
              <div class="mb-10">${Tag('Mit Anmeldung', 'light', 'pen')}</div>
            `
          : ''}
        <div class="button is-link row-start-9">
          Details <span class="sr-only">zu dieser Veranstaltung</span>
        </div>
      </article>
    </a>
  `
}

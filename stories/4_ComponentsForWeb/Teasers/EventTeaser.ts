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
      class="group/button hyphens-auto grid grid-rows-subgrid grid-cols-1 row-span-9"
    >
      <article
        class="border-green-100 border-2 rounded-large p-10 pb-15 hover:bg-blue-50 transition-all ease-in-out duration-250 h-full grid grid-rows-subgrid grid-cols-1 row-span-9"
      >
        <img
          src="${args.imageUrl}"
          sizes="(min-width: 1209px) 310px, (min-width: 1023px) 365px, (min-width: 767px) 331px, (min-width: 479px) 370px"
          width="5315"
          height="2990"
          alt="${args.imageCaption}"
          loading="lazy"
          class="w-full mb-15 rounded row-start-1"
        />
        <div class="text-4xl font-bold text-green-500 mb-10 row-start-2">
          ${args.date}
        </div>
        <div class="text-2xl font-bold text-blue-900 mb-10 row-start-3">
          ${args.title}
        </div>
        <time class="block font-bold text-blue-900 mb-15 row-start-4"
          >${args.time}</time
        >
        <address
          class="block not-italic font-bold text-green-700 mb-40 row-start-5"
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

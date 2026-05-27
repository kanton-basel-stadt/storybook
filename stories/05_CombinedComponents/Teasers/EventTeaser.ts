import { Tag } from '../../04_SingleComponents/Typography/Tag'
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

export const EventTeaser = (
  url: string,
  title: string,
  date: string,
  time: string,
  venue: string,
  imageUrl: string,
  imageCaption: string,
  hasMultiple: boolean,
  isRecurring: boolean,
  hasSignUp: boolean
) => {
  return html`
    <a
      href="${url}"
      class="group/button row-span-9 grid grid-cols-1 grid-rows-subgrid hyphens-auto"
    >
      <article
        class="row-span-9 grid h-full grid-cols-1 grid-rows-subgrid rounded-large border-2 border-green-100 p-10 pb-15 transition-all duration-250 ease-in-out hover:bg-blue-50"
      >
        <img
          src="${imageUrl}"
          sizes="(min-width: 1209px) 310px, (min-width: 1023px) 365px, (min-width: 767px) 331px, (min-width: 479px) 370px"
          width="5315"
          height="2990"
          alt="${imageCaption}"
          loading="lazy"
          class="row-start-1 mb-15 w-full rounded"
        />
        <h3 class="row-start-3 mb-10 text-4xl font-bold text-blue-900">
          ${title}
        </h3>
        <div class="row-start-2 mb-10 text-2xl font-bold text-green-500">
          ${date}
        </div>
        <time class="row-start-4 mb-15 block font-bold text-blue-900"
          >${time}</time
        >
        <address
          class="row-start-5 mb-40 block font-bold not-italic text-green-700"
        >
          ${venue}
        </address>
        ${hasMultiple
          ? html`
              <div class="mb-10">
                ${Tag('dark', 'Mehrere Termine', 'calendar')}
              </div>
            `
          : ''}
        ${isRecurring
          ? html`
              <div class="mb-10">
                ${Tag('standard', 'Fortlaufender Termin', 'calendar')}
              </div>
            `
          : ''}
        ${hasSignUp
          ? html`
              <div class="mb-10">${Tag('light', 'Mit Anmeldung', 'pen')}</div>
            `
          : ''}
        <div class="button is-link row-start-9">
          Details <span class="sr-only">zu dieser Veranstaltung</span>
        </div>
      </article>
    </a>
  `
}

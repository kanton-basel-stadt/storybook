import { Tag } from '../Typography/Tag'
import { html } from 'lit'

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
    <a href="${url}" class="group/button hyphens-auto block">
      <article class="border-green-100 border-2 rounded-large p-10 pb-15 hover:bg-blue-50 transition-all ease-in-out duration-250 h-full">
        <img
          src="${imageUrl}"
          sizes="(min-width: 1209px) 310px, (min-width: 1023px) 365px, (min-width: 767px) 331px, (min-width: 479px) 370px"
          width="5315"
          height="2990"
          alt="${imageCaption}"
          loading="lazy"
          class="w-full mb-15 rounded"
        />
        <div class="text-4xl font-bold text-green-500 mb-10">${date}</div>
        <div class="text-2xl font-bold text-blue-900 mb-10">${title}</div>
        <time class="block font-bold text-blue-900 mb-15">${time}</time>
        <address class="block not-italic font-bold text-green-700 mb-40">${venue}</address>
        ${hasMultiple ? html`
          <div class="mb-10">
            ${Tag('Mehrere Termine', 'dark', 'calendar')}
          </div>
        ` : ''}
        ${isRecurring ? html`
          <div class="mb-10">
            ${Tag('Fortlaufender Termin', 'standard', 'calendar')}
          </div>
        ` : ''}
        ${hasSignUp ? html`
          <div class="mb-10">
            ${Tag('Mit Anmeldung', 'light', 'pen')}
          </div>
        ` : ''}
        <div class="button is-link">Details <span class="sr-only">zu dieser Veranstaltung</span></div>
      </article>
    </a>
  `
}

import { html } from 'lit'
import { EventTeaser, type EventTeaserParams } from './EventTeaser'

export const EventTeaserList = (teasers: EventTeaserParams[]) => {
  return html`
    <ol
      class="[&amp;&gt;li]:pb-20 [&amp;&gt;li]:row-span-9 [&amp;&gt;li]:grid [&amp;&gt;li]:grid-rows-subgrid [&amp;&gt;li]:grid-cols-1 grid gap-20 md:grid-cols-2 xl:grid-cols-3"
    >
      ${teasers.map(
        (t) => html`
          <li>
            ${EventTeaser(
              t.url,
              t.title,
              t.date,
              t.time,
              t.venue,
              t.imageUrl,
              t.imageCaption,
              t.hasMultiple,
              t.isRecurring,
              t.hasSignUp
            )}
          </li>
        `
      )}
    </ol>
  `
}

import { html } from 'lit'
import { EventTeaser, type EventTeaserParams } from './EventTeaser'

export const EventTeaserList = (teasers: EventTeaserParams[]) => {
  return html`
    <ol
      class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-20 [&>li]:pb-20 [&>li]:row-span-9 [&>li]:grid [&>li]:grid-rows-subgrid [&>li]:grid-cols-1"
    >
      ${teasers.map((t) => html` <li>${EventTeaser(t)}</li> `)}
    </ol>
  `
}

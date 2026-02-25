import { html } from 'lit'

export const Pagination = () => {
  return html`<div class="my-30 py-20 lg:my-50">
    <div class="flex items-center justify-between">
      <a
        href="?page=1"
        title="Zur vorherigen Seite gehen"
        class="button is-prev"
      >
        <span class="mobile-only:sr-only">Zurück</span>
      </a>
      <div class="pagination-buttons flex items-center gap-3">
        <a href="?page=1" class="">
          <span class="sr-only">Weiter zur Seite</span> 1
        </a>
        <a class="is-active" href="?page=2" :aria-current="page">
          <span class="sr-only">Seite</span> 2
        </a>
        <a class="" href="?page=3" aria-current="date">
          <span class="sr-only">Seite</span> 3
        </a>
        <a class="" href="?page=4" aria-current="date">
          <span class="sr-only">Seite</span> 4
        </a>
        <div aria-hidden="true">…</div>
        <a class="" href="?page=417">
          <span class="sr-only">Seite</span> 417
        </a>
      </div>
      <a href="?page=3" title="Zur nächsten Seite gehen" class="button is-next">
        <span class="mobile-only:sr-only">Weiter</span>
      </a>
    </div>
  </div>`
}

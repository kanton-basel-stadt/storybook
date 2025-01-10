import { html } from 'lit'

import '@kanton-basel-stadt/designsystem/icons/symbol/arrow-south'

export const TableOfContents = (
  content: { label: string; target: string }[]
) => {
  return html`
    <div
      class="sticky bottom-0 z-50 mt-20 border-t-2 border-green-600 bg-green-100 md:mt-30 xl:mt-40"
    >
      <a
        href="#table-of-contents"
        class="pre-heading container flex justify-between py-20 text-green-700 mobile-only:text-lg lg:py-25"
      >
        <span>Auf dieser Seite</span>
      </a>
    </div>

    <div
      id="table-of-contents"
      class="-mt-1 mb-20 scroll-mt-20 bg-green-100 pb-20 md:mb-30 lg:pb-30 xl:mb-40"
    >
      <nav class="container">
        <ul
          class="grid auto-rows-auto grid-cols-1 gap-10 md:grid-cols-3 md:gap-20"
        >
          ${content.map(
            (c) => html`
              <li>
                <a
                  href="${c.target}"
                  class="link with-icon text-balance text-lg xl:text-xl"
                >
                  <span>${c.label}</span>
                </a>
              </li>
            `
          )}
        </ul>
      </nav>
    </div>
  `
}

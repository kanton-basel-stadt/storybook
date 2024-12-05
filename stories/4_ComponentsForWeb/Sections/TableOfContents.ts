import { html } from 'lit'

import '@kanton-basel-stadt/designsystem/icons/symbol/arrow-south'

export const TableOfContents = (content: { label: string, target: string }[]) => {
  return html`
    <div class="bg-green-100 border-t-2 border-green-600 mt-20 md:mt-30 xl:mt-40 sticky bottom-0 z-50">
      <a href="#table-of-contents" class="pre-heading text-green-700 py-20 lg:py-25 flex justify-between mobile-only:text-lg container">
        <span>Auf dieser Seite</span>
      </a>
    </div>

    <div id="table-of-contents" class="bg-green-100 pb-20 lg:pb-30 mb-20 md:mb-30 xl:mb-40 -mt-1 scroll-mt-20">
      <nav class="container">
        <ul class="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-10 md:gap-20">
          ${content.map(c => html`
            <li>
              <a href="${c.target}" class="link with-icon text-lg xl:text-xl text-balance">
                <span>${c.label}</span>
              </a>
            </li>
          `)}
        </ul>
      </nav>
    </div>
  `
}

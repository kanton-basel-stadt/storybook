import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { classMap } from 'lit-html/directives/class-map.js'

export type SearchResult = {
  title: string
  url: string
  breadcrumbs: string[]
  text: string
}

export const SearchResultList = (searchResults: SearchResult[]) => {
  return html`
    <ol class="grid gap-10">
      ${searchResults.map((r) => {
        return html`
          <li class="w-full min-w-0">
            <a
              class="search-result group/link block w-full py-10 lg:py-15"
              href="${r.url}"
            >
              <div class="link with-icon lg:text-lg">
                <div class="line-clamp-2 font-bold">${r.title}</div>
              </div>
              <div class="pl-25">
                <ul
                  class="col-start-2 flex w-full overflow-hidden text-xs text-blue-700"
                >
                  ${r.breadcrumbs.map((b, i) => {
                    const classes = {
                      flex: true,
                      "not-first:before:content-['›']": true,
                      'not-first:before:block': true,
                      'not-first:before:px-5': true,
                      'min-w-0': true,
                      'mobile-only:hidden': i === r.breadcrumbs.length - 1,
                    }

                    return html`
                      <li class="${classMap(classes)}">
                        <span class="truncate">${b}</span>
                      </li>
                    `
                  })}
                </ul>
                <div
                  class="col-start-2 mt-10 line-clamp-3 text-sm text-blue-900 md:text-base"
                >
                  ${unsafeHTML(r.text)}
                </div>
              </div>
            </a>
          </li>
        `
      })}
    </ol>
  `
}

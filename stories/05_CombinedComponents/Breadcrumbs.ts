import { html } from 'lit'

export type BreadcrumbLink = {
  href: string
  label: string
}

export const Breadcrumbs = (links: BreadcrumbLink[]) => {
  return html`
    <nav
      class="relative -mt-1 border-b border-b-gray-400 bg-gray-20 print:hidden"
      style="--breadcrumb-item-height: 54px;"
      aria-label="Breadcrumb"
    >
      <div class="container relative">
        <div class="breadcrumb-caret relative before:top-full">
          <ol
            itemscope=""
            itemtype="http://schema.org/BreadcrumbList"
            class="relative overflow-hidden transition-all"
            style="height: calc(var(--breadcrumb-item-height) * ${links.length});"
          >
            <li
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
              class="breadcrumb-item relative overflow-hidden"
              style="display:none;"
            >
              <a
                href="/static"
                class="breadcrumb-link breadcrumb-caret block overflow-hidden border-t border-t-gray-400 py-15 font-medium text-ellipsis text-blue-900 before:top-0 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:-outline-offset-2 focus-visible:outline-blue-600"
                itemprop="item"
              >
                <span itemprop="name" class="whitespace-nowrap"
                  >Startseite</span
                >
              </a>
              <meta itemprop="position" content="1" />
            </li>

            ${links.map(
              (link, i) => html`
                <li
                  itemprop="itemListElement"
                  itemscope=""
                  itemtype="http://schema.org/ListItem"
                  class="breadcrumb-item relative overflow-hidden"
                >
                  <a
                    href="${link.href}"
                    class="breadcrumb-link breadcrumb-caret block overflow-hidden border-t border-t-gray-400 py-15 font-medium text-ellipsis text-blue-900 before:top-0 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:-outline-offset-2 focus-visible:outline-blue-600"
                    itemprop="item"
                  >
                    <span itemprop="name" class="whitespace-nowrap"
                      >${link.label}</span
                    >
                  </a>
                  <meta itemprop="position" content="${i + 1}" />
                </li>
              `
            )}
          </ol>
        </div>
      </div>
    </nav>
  `
}

import { html } from 'lit'

export type BreadcrumbLink = {
  href: string
  label: string
}

export const Breadcrumbs = (links: BreadcrumbLink[]) => {
  return html`
    <nav
        class="bg-gray-20 border-b border-b-gray-400 -mt-1 relative print:hidden"
        style="--breadcrumb-item-height: 54px;"
        aria-label="Breadcrumb"
    >
      <div class="container relative">
        <div class="relative breadcrumb-caret before:top-full">
          <ol itemscope="" itemtype="http://schema.org/BreadcrumbList" class="relative transition-all overflow-hidden" style="height: calc(var(--breadcrumb-item-height) * ${links.length});">
            <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
                class="breadcrumb-item relative overflow-hidden"
                style="display:none;"
            >
              <a href="/" class="breadcrumb-link block py-15 font-medium breadcrumb-caret before:top-0 border-t border-t-gray-400 text-blue-900 hover:text-blue-700 overflow-hidden text-ellipsis" itemprop="item">
                <span itemprop="name" class="whitespace-nowrap">Startseite</span>
              </a>
              <meta itemprop="position" content="1">
            </li>
            
            ${links.map((link, i) => html`
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
                class="breadcrumb-item relative overflow-hidden"
              >
                <a
                  href="${link.href}"
                  class="breadcrumb-link block py-15 font-medium breadcrumb-caret before:top-0 border-t border-t-gray-400 text-blue-900 hover:text-blue-700 overflow-hidden text-ellipsis"
                  itemprop="item"
                >
                  <span itemprop="name" class="whitespace-nowrap">${link.label}</span>
                </a>
                <meta itemprop="position" content="${i + 1}">
              </li>
            `)}
          </ol>
        </div>
      </div>
    </nav>
  `
}

import { html } from 'lit'

export type Link = {
  label: string,
  url: string,
}

export const FrequentlyAsked = (links: Link[]) => {
  return html`
    <section class="border-t border-t-gray-200 py-25 lg:py-30 xl:py-40 bg-white !mt-0">
      <div class="container">
        <h2 class="pre-heading sticky top-sticky-top mobile-only:px-15 mobile-only:-mx-15 z-40 py-15 transition-all duration-250 ease-in-out -mt-15 backdrop-blur-md mb-20 text-primary-700 bg-white/80">
          Häufig nachgefragt
        </h2>
        <div>
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-y-20 mt-20">
            ${links.map(link => {
              return html`
                <li>
                  <a class="link with-icon text-lg xl:text-xl" href="${link.url}">
                    ${link.label}
                  </a>
                </li>
              `
            })}
          </ul>
        </div>
      </div>
    </section>
  `
}

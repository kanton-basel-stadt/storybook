import { html } from 'lit'

export type Link = {
  label: string
  url: string
}

export const FrequentlyAsked = (links: Link[]) => {
  return html`
    <section
      class="!mt-0 border-t border-t-gray-200 bg-white py-25 lg:py-30 xl:py-40"
    >
      <div class="container">
        <h2
          class="pre-heading sticky top-sticky-top z-40 mb-20 bg-white/80 py-15 text-primary-700 backdrop-blur-md transition-all duration-250 ease-in-out mobile-only:-mx-15 mobile-only:px-15"
        >
          Häufig nachgefragt
        </h2>
        <div>
          <ul
            class="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
          >
            ${links.map((link) => {
              return html`
                <li>
                  <a
                    class="link with-icon text-lg xl:text-xl"
                    href="${link.url}"
                  >
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

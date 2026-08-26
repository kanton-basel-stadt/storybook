import { html } from 'lit'

export type Link = {
  label: string
  url: string
}

export type FrequentlyAskedProps = {
  title: string
  description: string
  links: Link[]
}

export const FrequentlyAsked = (
  title: string,
  description: string,
  links: Link[]
) => {
  return html`
    <section
      class="paragraph--padded bg-primary-600 py-25 lg:py-30 xl:py-40"
      id="haeufig-gesucht"
    >
      <div class="container">
        <header class="mb-10 lg:mb-20 xl:mb-30">
          <h2 class="h2 hyphens-auto break-words text-white">${title}</h2>
          <p
            class="mt-20 hyphens-auto break-words text-white lg:text-lg xl:w-4/6"
          >
            ${description}
          </p>
        </header>
        <div>
          <div class="grid gap-15 md:grid-cols-2 lg:gap-20">
            ${links.map((link) => {
              return html`
                <ul class="rounded bg-white md:rounded-large">
                  <li>
                    <a
                      class="link with-icon h-full auto-rows-min justify-start hyphens-auto p-15 pl-10 lg:pl-[12px] lg:text-lg"
                      href="${link.url}"
                    >
                      <span
                        class="col-start-2 row-start-1 hyphens-auto font-bold"
                      >
                        ${link.label}
                      </span>
                    </a>
                  </li>
                </ul>
              `
            })}
          </div>
        </div>
      </div>
    </section>
  `
}

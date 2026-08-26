import { html } from 'lit'

export const LinkList = (
  links: { url: string; label: string; description: string }[]
) => {
  return html`
    <ul class="grid gap-20 md:grid-cols-2 lg:gap-y-25 xl:gap-y-30">
      ${links.map(
        (link) => html`
          <li>
            <a class="link with-icon lg:text-lg" href="${link.url}">
              <span class="col-start-2 row-start-1 font-bold hyphens-auto">
                ${link.label}
              </span>
              <p
                class="col-start-2 row-start-2 mt-5 text-base font-normal hyphens-auto"
              >
                ${link.description}
              </p>
            </a>
          </li>
        `
      )}
    </ul>
  `
}

import { html } from 'lit'

export const LinkList = (links: { url: string, label: string, description: string }[]) => {
  return html`
    <ul class="grid md:grid-cols-2 gap-20 lg:gap-y-25 xl:gap-y-30">
      ${links.map(link => html`
        <li>
          <a class="link with-icon lg:text-lg" href="${link.url}">
            <span class="hyphens-auto font-bold col-start-2 row-start-1">
              ${link.label}
            </span>
            <p class="hyphens-auto col-start-2 row-start-2 font-normal mt-5 text-base">
              ${link.description}
            </p>
          </a>
        </li>
      `)}
    </ul>
  `
}

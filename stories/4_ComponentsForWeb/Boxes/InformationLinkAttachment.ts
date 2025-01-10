import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export type Link = {
  label: string
  description: string
  url: string
}

export const InformationLinkAttachment = (
  title: string,
  content: string,
  links: Link[]
) => {
  return html`
    <div
      class="info-box relative w-full rounded-large bg-primary-50 p-15 md:col-span-7 lg:max-w-box lg:p-20 lg:pr-30"
    >
      <div
        class="absolute right-15 top-15 flex size-50 items-center justify-between rounded-full border-2 border-current p-10 text-primary-600"
      >
        ${Icon('hinweise_no_rounded', {
          '[&_svg]:size-30': true,
          '-ml-2': true,
        })}
      </div>
      <h3 class="h4 text-balance pr-50 text-primary-600">${title}</h3>
      <div
        class="ck-content is-small info-box-floater mt-15 hyphens-auto text-base"
      >
        <p>${content}</p>
      </div>
      ${links.map((link) => {
        return html`
          <a
            class="link with-icon clear-both mt-15 w-full text-balance"
            href="${link.url}"
          >
            <span class="col-start-2 row-start-1 hyphens-auto font-bold">
              ${link.label}
            </span>
            <p
              class="col-start-2 row-start-2 mt-5 hyphens-auto text-base font-normal"
            >
              ${link.description}
            </p>
          </a>
        `
      })}
    </div>
  `
}

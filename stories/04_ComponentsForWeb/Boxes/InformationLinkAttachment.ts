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
  links: Link[],
  isInverted: boolean,
  hideDescription: boolean
) => {
  return html`
    <div
      class="info-box ${isInverted
        ? 'bg-primary-600'
        : 'bg-primary-50'} relative w-full rounded-large p-20 md:col-span-7 lg:max-w-box lg:p-20 lg:pr-30"
    >
      <div class="flex items-center">
        <div
          class="${isInverted
            ? 'text-white'
            : 'text-primary-600'} flex size-50 items-center justify-between rounded-full border-2 border-current p-10"
        >
          ${Icon('hinweise_no_rounded', {
            '[&_svg]:size-30': true,
            '-ml-2': true,
          })}
        </div>
        <h3
          class="h4 ${isInverted
            ? 'text-white'
            : 'text-primary-600'} ml-20 text-balance"
        >
          ${title}
        </h3>
      </div>
      <div
        class="ck-content is-small info-box-floater ${isInverted
          ? 'text-white'
          : ''} mt-20 hyphens-auto text-base"
      >
        <p>${content}</p>
      </div>
      <ul>
        ${links.map((link) => {
          return html`
            <li>
              <a
                class="link with-icon ${isInverted
                  ? 'is-inverted'
                  : ''} clear-both mt-20 w-full text-balance"
                href="${link.url}"
              >
                <span class="col-start-2 row-start-1 hyphens-auto font-bold">
                  ${link.label}
                </span>
                <p
                  class="${hideDescription
                    ? 'hidden'
                    : ''} col-start-2 row-start-2 mt-5 hyphens-auto text-base font-normal"
                >
                  ${link.description}
                </p>
              </a>
            </li>
          `
        })}
      </ul>
    </div>
  `
}

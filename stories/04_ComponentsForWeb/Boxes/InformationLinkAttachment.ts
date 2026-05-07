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
        ? 'bg-primary-700'
        : 'bg-primary-50'} w-full md:col-span-7 p-15 lg:p-20 rounded-large lg:max-w-box lg:pr-30"
    >
      <div
        class="grid grid-cols-[auto_1fr] gap-10 items-center ${isInverted ? 'text-white' : 'text-primary-700'}"
      >
        <div>
          ${Icon('hinweise_rounded', {
            'text-[33.333px]': true,
          })}
        </div>
        <div>
          <legend class="text-base font-bold ${isInverted ? 'text-white' : 'text-primary-700'}">
            ${title}
          </legend>
        </div>
      
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

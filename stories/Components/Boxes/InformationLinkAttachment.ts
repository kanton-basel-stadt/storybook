import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export type Link = {
  label: string,
  description: string,
  url: string,
}

export const InformationLinkAttachment = (title: string, content: string, links: Link[]) => {
  return html`
    <div class="info-box w-full md:col-span-7 p-15 lg:p-20 rounded-large lg:max-w-box lg:pr-30 relative bg-primary-50">
      <div class="border-2 rounded-full size-50 flex items-center justify-between p-10 border-current absolute top-15 right-15 text-primary-600">
        ${Icon('hinweise_no_rounded', {
        '[&>svg]:size-30': true,
          '-ml-2': true,
      })}
      </div>
      <h3 data-blokkli-editable-field="field_title" class="h4 text-balance pr-50 text-primary-600">
        ${title}
      </h3>
      <div data-blokkli-editable-field="paragraphs_text" class="text-base ck-content hyphens-auto is-small mt-15 info-box-floater">
        <p>
          ${content}
        </p>
      </div>
      ${links.map(link => {
        return html`
          <a class="link with-icon text-balance w-full mt-15 clear-both" href="${link.url}">
            <span class="hyphens-auto font-bold col-start-2 row-start-1">
              ${link.label}
            </span>
            <p class="hyphens-auto col-start-2 row-start-2 font-normal mt-5 text-base">
              ${link.description}
            </p>
          </a>
        `
      })}
    </div>
  `
}

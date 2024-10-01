import { html } from 'lit'
import { Icon } from '../Icons/Icon'
import '@kanton-basel-stadt/designsystem/icons/symbol/caret'

export type AccordionLink = {
  label: string,
  description: string,
  url: string,
}

export type Accordion = {
  label: string,
  content: string,
  isOpen: boolean,
  id: string,
  links: AccordionLink[]
}

export const Accordion = (title: string, accordions: Accordion[]) => {
  return html`
    <div class="py-25 lg:py-30 xl:py-40 bg-green-100 mt-30">
      <div class="container">
        <header class="mb-10 lg:mb-20 xl:mb-30">
          <h2 class="h2 break-words hyphens-auto text-green-600">${title}</h2>
        </header>
        <div>
          <div class="grid gap-10 md:gap-15 grid-cols-1 items-start">
            ${accordions.map(accordion => html`
              <div class="rounded-large ring-gray-700/20 ring-1 hover:ring-gray-700/60 bg-white shadow-lg !ring-gray-700/60">
                <h3 class="rounded-large cursor-pointer text-blue-900 hover:text-blue-700 md:text-lg lg:text-xl font-bold">
                  <button
                    id="accordion-toggle-${accordion.id}"
                    type="button"
                    class="flex items-center justify-between marker:hidden p-10 w-full md:px-20 lg:py-15 text-left focus-visible:outline-2"
                    aria-expanded="true"
                    aria-controls="accordion-content-${accordion.id}"
                  >
                    <span>${accordion.label}</span>
                    ${Icon('caret', {
                      '[&>svg]:transition-all': true,
                      '[&>svg]:duration-250': true,
                      '[&>svg]:w-15': true,
                      '[&>svg]:h-10': true,
                      '[&>svg]:shrink-0': true,
                      '[&>svg]:-scale-y-100': accordion.isOpen,
                    })}
                  </button>
                </h3>
                <div id="accordion-content-${accordion.id}" role="region" aria-labelledby="accordion-toggle-${accordion.id}" style="${accordion.isOpen ? '' : 'display: none;'}">
                  <div class="p-10 md:p-20">
                    <div class="mb-20">
                      ${accordion.content}
                    </div>
                    <div class="grid gap-5">
                      ${accordion.links.map(link => html`
                        <a class="link with-icon" href="${link.url}">
                          <span class="hyphens-auto font-bold col-start-2 row-start-1">
                            ${link.label}
                          </span>
                          <p class="hyphens-auto col-start-2 row-start-2 font-normal mt-5 text-base">
                            ${link.description}
                          </p>
                        </a>
                      `)}
                    </div>
                  </div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  `
}

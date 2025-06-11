import { html } from 'lit'
import { Icon } from '../Icons/Icon'
import '@kanton-basel-stadt/designsystem/icons/symbol/caret'
import { classMap } from 'lit-html/directives/class-map.js'

export type AccordionLink = {
  label: string
  description: string
  url: string
}

export type Accordion = {
  label: string
  content: string
  isOpen: boolean
  id: string
  links: AccordionLink[]
}

export const Accordion = (
  title: string,
  accordions: Accordion[],
  numberOfColumns: '1' | '2'
) => {
  const containerClasses = {
    grid: true,
    'gap-10': true,
    'md:gap-15': true,
    'grid-cols-1': true,
    'md:grid-cols-2': numberOfColumns === '2',
    'items-start': true,
  }

  return html`
    <div class="mt-30 bg-green-100 py-25 lg:py-30 xl:py-40">
      <div class="container">
        <header class="mb-10 lg:mb-20 xl:mb-30">
          <h2 class="h2 hyphens-auto break-words text-green-600">${title}</h2>
        </header>
        <div>
          <div class="${classMap(containerClasses)}">
            ${accordions.map(
              (accordion) => html`
                <div
                  class="rounded-large bg-white shadow-lg ring-1 !ring-gray-700/60 ring-gray-700/20 hover:ring-gray-700/60"
                >
                  <h3
                    class="cursor-pointer rounded-large font-bold text-blue-900 hover:text-blue-700 md:text-lg lg:text-xl"
                  >
                    <button
                      id="accordion-toggle-${accordion.id}"
                      type="button"
                      class="flex w-full items-center justify-between p-10 text-left marker:hidden focus-visible:outline-2 md:px-20 lg:py-15"
                      aria-expanded="true"
                      aria-controls="accordion-content-${accordion.id}"
                    >
                      <span>${accordion.label}</span>
                      ${Icon('caret', {
                        '[&_svg]:transition-all': true,
                        '[&_svg]:duration-250': true,
                        '[&_svg]:w-15': true,
                        '[&_svg]:h-10': true,
                        '[&_svg]:shrink-0': true,
                        '[&_svg]:-scale-y-100': accordion.isOpen,
                      })}
                    </button>
                  </h3>
                  <div
                    id="accordion-content-${accordion.id}"
                    role="region"
                    aria-labelledby="accordion-toggle-${accordion.id}"
                    style="${accordion.isOpen ? '' : 'display: none;'}"
                  >
                    <div class="p-10 md:p-20">
                      <div class="mb-20">${accordion.content}</div>
                      <div class="grid gap-5">
                        ${accordion.links.map(
                          (link) => html`
                            <a class="link with-icon" href="${link.url}">
                              <span
                                class="col-start-2 row-start-1 hyphens-auto font-bold"
                              >
                                ${link.label}
                              </span>
                              <p
                                class="col-start-2 row-start-2 mt-5 hyphens-auto text-base font-normal"
                              >
                                ${link.description}
                              </p>
                            </a>
                          `
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    </div>
  `
}

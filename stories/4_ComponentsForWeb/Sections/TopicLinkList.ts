import { html } from 'lit'
import { Icon, IconName } from '../Icons/Icon'

export type Link = {
  label: string
  url: string
}

export type LinkGroup = Link & {
  iconName: IconName
  links: Link[]
}

export const TopicLinkList = (title: string, linkGroups: LinkGroup[]) => {
  return html`
    <section
      class="border-t border-t-gray-200 py-25 lg:py-30 xl:py-40 bg-white"
    >
      <div class="container">
        <h2
          class="pre-heading sticky top-sticky-top mobile-only:px-15 mobile-only:-mx-15 z-40 py-15 transition-all duration-250 ease-in-out -mt-15 backdrop-blur-md mb-20 text-primary-700 bg-white/80"
        >
          ${title}
        </h2>
        <div>
          <ul
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-y-40 xl:gap-y-50"
          >
            ${linkGroups.map((linkGroup) => {
              return html`
                <li class="min-h-40">
                  <h3>
                    <a
                      class="link text-lg lg:text-xl flex -mb-10"
                      href="${linkGroup.url}"
                    >
                      ${Icon(linkGroup.iconName, {
                        '[&_svg]:!w-40': true,
                        '[&_svg]:!h-40': true,
                        '[&_svg]:shrink-0': true,
                      })}
                      <span class="mb-10">${linkGroup.label}</span>
                    </a>
                  </h3>
                  <ul class="mt-5 grid gap-8 xl:mt-10 pl-[50px]">
                    ${linkGroup.links.map((link) => {
                      return html`
                        <li>
                          <a
                            class="link font-normal text-base lg:text-lg inline-block"
                            href="${link.url}"
                          >
                            ${link.label}
                          </a>
                        </li>
                      `
                    })}
                  </ul>
                </li>
              `
            })}
          </ul>
        </div>
      </div>
    </section>
  `
}

import { html } from 'lit'
import { Icon, IconName } from '../03_Basics/Icon'

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
      class="border-t border-t-gray-200 bg-white py-25 lg:py-30 xl:py-40"
    >
      <div class="container">
        <h2
          class="pre-heading sticky top-sticky-top z-40 mb-20 bg-white/80 py-15 text-primary-700 backdrop-blur-md transition-all duration-250 ease-in-out mobile-only:-mx-15 mobile-only:px-15"
        >
          ${title}
        </h2>
        <div>
          <ul
            class="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-40 xl:gap-y-50"
          >
            ${linkGroups.map((linkGroup) => {
              return html`
                <li class="min-h-40">
                  <h3>
                    <a
                      class="link -mb-10 flex text-lg lg:text-xl"
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
                  <ul class="mt-5 grid gap-8 pl-[50px] xl:mt-10">
                    ${linkGroup.links.map((link) => {
                      return html`
                        <li>
                          <a
                            class="link inline-block text-base font-normal lg:text-lg"
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

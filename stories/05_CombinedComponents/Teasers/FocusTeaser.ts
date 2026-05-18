import { html } from 'lit'
import { classMap } from 'lit-html/directives/class-map.js'

export type Link = {
  label: string
  url: string
}

export const FocusTeaser = (
  title: string,
  mainUrl: string,
  links: Link[],
  imageUrlSm: string,
  imageUrlMd: string,
  imageUrlLg: string,
  imageUrlXl: string,
  imageCaption: string,
  imageAlt: string,
  color: 'light' | 'dark'
) => {
  const paragraphClasses = {
    'py-25': true,
    'lg:py-30': true,
    'xl:py-40': true,
    'paragraph--padded': true,
    'bg-blue-900': color === 'dark',
    'bg-primary-100': color === 'light',
  }

  const headingClasses = {
    'pre-heading': true,
    sticky: true,
    'top-sticky-top': true,
    'mobile-only:px-15': true,
    'mobile-only:-mx-15': true,
    'z-40': true,
    'py-15': true,
    'transition-all': true,
    'duration-250': true,
    'ease-in-out': true,
    'backdrop-blur-md': true,
    'mb-20': true,
    'text-white': color === 'dark',
    'bg-blue-900/80': color === 'dark',
    'text-primary-700': color === 'light',
    'bg-primary-100/80': color === 'light',
  }

  const titleClasses = {
    'font-bold': true,
    'md:text-5xl': true,
    'text-3xl': true,
    'pb-25': true,
    'text-primary-700': color === 'light',
    'text-white': color === 'dark',
  }

  const figureClass = {
    'text-white': color === 'dark',
  }

  const linkClasses = {
    link: true,
    'with-icon': true,
    'xl:text-lg': true,
    'is-inverted': color === 'dark',
  }

  return html`
    <section class="${classMap(paragraphClasses)}">
      <div class="container">
        <h2 class="${classMap(headingClasses)}">Schwerpunkt</h2>
        <div>
          <h3 class="${classMap(titleClasses)}">${title}</h3>
          <section class="grid gap-20 md:grid-cols-3">
            <a class="md:col-span-2 md:pb-0" href="${mainUrl}">
              <figure class="${classMap(figureClass)}">
                <div class="overflow-hidden rounded bg-gray-100">
                  <img
                    alt="${imageAlt}"
                    class="w-full"
                    height="1267"
                    loading="lazy"
                    sizes="(min-width: 1209px) 687px, (min-width: 1023px) 524px, (min-width: 767px) 480px, (min-width: 479px) 396px"
                    src="${imageUrlSm}"
                    srcset="
                      ${imageUrlSm}   396w,
                      ${imageUrlSm}   594w,
                      ${imageUrlSm}  792w,
                      ${imageUrlMd}  480w,
                      ${imageUrlMd}  720w,
                      ${imageUrlMd}  960w,
                      ${imageUrlLg}  524w,
                      ${imageUrlLg}  786w,
                      ${imageUrlLg} 1048w,
                      ${imageUrlXl}  687w,
                      ${imageUrlXl} 1031w,
                      ${imageUrlXl} 1374w
                    "
                    width="1689"
                  />
                </div>
                <figcaption class="mt-10 justify-between text-xs md:flex">
                  <div>${imageCaption}</div>
                </figcaption>
              </figure>
            </a>
            <div class="md:pt-0">
              <ul class="grid grid-cols-1 gap-20">
                ${links.map(
                  (link) => html`
                    <li>
                      <a class="${classMap(linkClasses)}" href="${link.url}">
                        <span
                          class="col-start-2 row-start-1 hyphens-auto font-bold"
                        >
                          ${link.label}
                        </span>
                      </a>
                    </li>
                  `
                )}
              </ul>
              <a class="button is-link is-inverted mt-20" href="${mainUrl}">
                Mehr erfahren
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  `
}

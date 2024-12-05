import { html } from 'lit'
import { classMap } from 'lit-html/directives/class-map.js'

export const Gallery = (title: string, color: 'white'|'green'|'blue', imageUrlSm: string, imageUrlMd: string, imageUrlLg: string, imageUrlXl: string, imageCaption: string, imageAlt: string, imageCopyRight: string) => {
  const containerClasses = {
    'py-30': true,
    'lg:py-40': true,
    'xl:pt-50': true,
    'paragraph--padded': true,
    'bg-blue-900': color === 'blue',
    'print:!bg-white': color === 'blue',
    'bg-primary-100': color === 'green',
  }

  const titleClasses = {
    'font-bold': true,
    'text-2xl': true,
    'md:text-3xl': true,
    'lg:text-4xl': true,
    'xl:text-5xl': true,
    'print:text-xl': true,
    'print:!text-body': true,
    'hyphens-auto': true,
    'text-primary-500': color === 'green',
    'text-blue-900': color === 'white',
    'text-white': color === 'blue',
  }

  const captionClasses = {
    'font-medium': true,
    'text-sm': true,
    'md:text-base': true,
    'lg:text-lg': true,
    'md:mb-5': true,
    'print:!text-body': true,
    'text-gray-700': color === 'white',
    'text-gray-800': color === 'green',
    'text-white': color === 'blue',
  }

  const copyrightClasses = {
    'text-xs': true,
    'text-gray-300': color === 'white',
    'text-primary-900/40': color === 'green',
    'text-white/50': color === 'blue',
  }

  return html`
    <div class="${classMap(containerClasses)}" id="title">
      <div class="container mb-20 md:mb-30">
        <h3 class="${classMap(titleClasses)}">
          ${title}
        </h3>
      </div>
      <div class="container mobile-only:px-0">
        <section aria-label="Gallery" class="carousel relative text-center touch-pan-y overscroll-none" dir="ltr" tabindex="0">
          <div class="carousel__viewport">
            <ol class="carousel__track">
              <li aria-hidden="true" class="carousel__slide carousel__slide" style="width: 100%;">
                <figure class="flex flex-col items-center justify-center w-full">
                  <div class="carousel__image-slide flex items-center justify-center w-full aspect-video">
                    <img
                        alt="${imageAlt}"
                        class="w-full"
                        height="900"
                        loading="lazy" sizes="(min-width: 1209px) 1040px, (min-width: 1023px) 796px, (min-width: 767px) 728px, (min-width: 479px) 400px" 
                        src="${imageUrlSm}"
                        srcset="
                          ${imageUrlSm} 400w,
                          ${imageUrlSm} 600w,
                          ${imageUrlSm} 800w,
                          ${imageUrlMd} 728w,
                          ${imageUrlMd} 1092w,
                          ${imageUrlMd} 1456w,
                          ${imageUrlLg} 796w,
                          ${imageUrlLg} 1194w,
                          ${imageUrlLg} 1592w,
                          ${imageUrlXl} 1040w,
                          ${imageUrlXl} 1560w,
                          ${imageUrlXl} 2080w
                        "
                        width="1600"
                    >
                  </div>
                  <figcaption class="w-full grid grid-cols-[auto_1fr] gap-10 md:gap-20 text-left mt-15 md:mt-25 print:p-20">
                    <div class="border border-gray-300 px-10 rounded-full text-xs font-medium text-blue-900 self-start bg-white">
                      1/2
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-1">
                      <p class="${classMap(captionClasses)}">
                        ${imageCaption}
                      </p>
                      <p class="${classMap(copyrightClasses)}">${imageCopyRight}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ol>
          </div>
          <div class="absolute top-0 inset-x-0 flex pointer-events-none aspect-video justify-between">
            <button aria-label="Vorheriges Bild" class="group/button carousel-button">
              <div class="button is-prev mobile-only:is-sm is-icon-only">
                <span class="sr-only">Vorheriges</span>
              </div>
            </button>
            <button aria-label="Nächstes Bild" class="group/button carousel-button">
              <div class="button is-next mobile-only:is-sm is-icon-only">
                <span class="sr-only">Nächstes</span>
              </div>
            </button>
          </div>
          <div aria-atomic="true" aria-live="polite" class="sr-only">Bild 1 of 2</div>
        </section>
      </div>
    </div>
  `
}

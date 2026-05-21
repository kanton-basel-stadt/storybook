import { html } from 'lit'
import { classMap } from 'lit-html/directives/class-map.js'

export const Gallery = (
  title: string,
  variant: 'white' | 'green' | 'blue',
  imageUrlXl: string,
  imageUrlLg: string,
  imageUrlMd: string,
  imageUrlSm: string,
  imageCaption: string,
  imageAlt: string,
  imageCopyRight: string
) => {
  const containerClasses = {
    'py-30': true,
    'lg:py-40': true,
    'xl:pt-50': true,
    'paragraph--padded': true,
    'bg-blue-900': variant === 'blue',
    'print:!bg-white': variant === 'blue',
    'bg-primary-100': variant === 'green',
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
    'text-green-700': variant === 'white' || variant === 'green',
    'text-white': variant === 'blue',
  }

  const captionClasses = {
    'font-medium': true,
    'text-sm': true,
    'md:text-base': true,
    'lg:text-lg': true,
    'md:mb-5': true,
    'print:!text-body': true,
    'text-gray-700': variant === 'white' || variant === 'green',
    'text-white': variant === 'blue',
  }

  const copyrightClasses = {
    'text-xs': true,
    'text-gray-700': variant === 'white',
    'text-primary-900/75': variant === 'green',
    'text-white/75': variant === 'blue',
  }

  return html`
    <div class="${classMap(containerClasses)}" id="title">
      <div class="container mb-20 md:mb-30">
        <h3 class="${classMap(titleClasses)}">${title}</h3>
      </div>
      <div class="container mobile-only:px-0">
        <section
          aria-label="Gallery"
          class="carousel relative touch-pan-y overscroll-none text-center"
          dir="ltr"
          tabindex="0"
        >
          <div class="carousel__viewport">
            <ol class="carousel__track">
              <li aria-hidden="true" class="carousel__slide w-full">
                <figure
                  class="flex w-full flex-col items-center justify-center"
                >
                  <div
                    class="carousel__image-slide flex aspect-video w-full items-center justify-center"
                  >
                    <img
                      alt="${imageAlt}"
                      class="w-full"
                      height="900"
                      loading="lazy"
                      sizes="(min-width: 1209px) 1040px, (min-width: 1023px) 796px, (min-width: 767px) 728px, (min-width: 479px) 400px"
                      src="${imageUrlSm}"
                      srcset="
                        ${imageUrlSm}  400w,
                        ${imageUrlMd}  800w,
                        ${imageUrlLg} 1024w,
                        ${imageUrlXl} 1680w
                      "
                      width="1600"
                    />
                  </div>
                  <figcaption
                    class="mt-15 grid w-full grid-cols-[auto_1fr] gap-10 text-left md:mt-25 md:gap-20 print:p-20"
                  >
                    <div
                      class="self-start rounded-full border border-gray-300 bg-white px-10 text-xs font-medium text-blue-900"
                    >
                      1/2
                    </div>
                    <div
                      class="grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-1"
                    >
                      <p class="${classMap(captionClasses)}">${imageCaption}</p>
                      <p class="${classMap(copyrightClasses)}">
                        ${imageCopyRight}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ol>
          </div>
          <div
            class="pointer-events-none absolute inset-x-0 top-0 flex aspect-video justify-between"
          >
            <button
              type="button"
              aria-label="Vorheriges Bild"
              class="group/button carousel-button"
            >
              <span class="button is-prev mobile-only:is-sm is-icon-only">
                <span class="sr-only">Vorheriges</span>
              </span>
            </button>
            <button
              type="button"
              aria-label="Nächstes Bild"
              class="group/button carousel-button"
            >
              <span class="button is-next mobile-only:is-sm is-icon-only">
                <span class="sr-only">Nächstes</span>
              </span>
            </button>
          </div>
          <div aria-atomic="true" aria-live="polite" class="sr-only">
            Bild 1 of 2
          </div>
        </section>
      </div>
    </div>
  `
}

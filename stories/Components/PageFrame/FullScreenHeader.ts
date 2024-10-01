import { html } from 'lit'

export const FullScreenHeader = (title: string, imageUrlSm: string, imageUrlMd: string, imageUrlLg: string, imageUrlXl: string,  imageCaption: string, lead: string) => {
  return html`
    <header class="relative z-0 content-fullscreen-header overflow-hidden">
      <figure class="h-full will-change-transform" style="transform: translateY(6.92464%);">
        <picture>
          <img
            src="${imageUrlXl}"
            srcset="
              ${ imageUrlSm } 400w,
              ${ imageUrlSm } 600w,
              ${ imageUrlSm } 800w,
              ${ imageUrlMd } 728w,
              ${ imageUrlMd } 1092w,
              ${ imageUrlMd } 1456w,
              ${ imageUrlLg } 796w,
              ${ imageUrlLg } 1194w,
              ${ imageUrlLg } 1592w,
              ${ imageUrlXl } 1040w,
              ${ imageUrlXl } 1560w,
              ${ imageUrlXl } 2080w
            "
            sizes="(min-width: 1209px) 1040px, (min-width: 1023px) 796px, (min-width: 767px) 728px, (min-width: 479px) 400px"
            width="1680"
            height="1680"
            alt="${imageCaption}"
            loading="eager"
            class="w-full"
          />
        </picture>
      </figure>
      <div class="absolute top-0 left-0 size-full z-10 bg-body will-change-[opacity] pointer-events-none" style="opacity: 0;"></div>
      <div class="bg-white py-30 md:py-50 lg:py-70 xxl:py-100 absolute z-20 left-0 bottom-0 w-full mix-blend-lighten">
        <div class="container">
          <div style="transform: translateY(3.46232%);">
            <h1 class="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-8xl xxl:text-9xl will-change-transform">${title}</h1>
            <div>
              <p class="font-bold text-lg md:text-xl xl:text-2xl mt-30 hyphens-auto lg:hyphens-none">
                ${lead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
}

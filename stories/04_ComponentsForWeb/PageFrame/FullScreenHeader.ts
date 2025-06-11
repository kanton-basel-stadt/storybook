import { html } from 'lit'

export const FullScreenHeader = (
  title: string,
  imageUrlSm: string,
  imageUrlMd: string,
  imageUrlLg: string,
  imageUrlXl: string,
  imageCaption: string,
  lead: string
) => {
  return html`
    <header class="content-fullscreen-header relative z-0 overflow-hidden">
      <figure
        class="h-full will-change-transform"
        style="transform: translateY(6.92464%);"
      >
        <picture>
          <img
            src="${imageUrlXl}"
            srcset="
              ${imageUrlSm}   400w,
              ${imageUrlSm}   600w,
              ${imageUrlSm}   800w,
              ${imageUrlMd}   728w,
              ${imageUrlMd}  1092w,
              ${imageUrlMd}  1456w,
              ${imageUrlLg}   796w,
              ${imageUrlLg}  1194w,
              ${imageUrlLg}  1592w,
              ${imageUrlXl} 1040w,
              ${imageUrlXl} 1560w,
              ${imageUrlXl} 2080w
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
      <div
        class="pointer-events-none absolute left-0 top-0 z-10 size-full bg-body will-change-[opacity]"
        style="opacity: 0;"
      ></div>
      <div
        class="absolute bottom-0 left-0 z-20 w-full bg-white py-30 mix-blend-lighten md:py-50 lg:py-70 xxl:py-100"
      >
        <div class="container">
          <div style="transform: translateY(3.46232%);">
            <h1
              class="text-5xl font-bold will-change-transform md:text-5xl lg:text-6xl xl:text-8xl xxl:text-9xl"
            >
              ${title}
            </h1>
            <div>
              <p
                class="mt-30 hyphens-auto text-lg font-bold md:text-xl lg:hyphens-none xl:text-2xl"
              >
                ${lead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
}

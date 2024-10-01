import { html } from 'lit'

export const Teaser = (title: string, url: string, description: string, imageUrlSm: string, imageUrlMd: string, imageUrlLg: string, imageUrlXl: string, imageCaption: string) => {
  return html`
    <a class="group/button group/link hyphens-auto flex flex-col" href="${url}">
      <h3 class="text-lg font-bold link order-2">${title}</h3>
      <div class="mb-20 bg-gray-50 order-1">
        <figure>
          <div class="overflow-hidden rounded bg-gray-100">
            <img
              src="${imageUrlSm}"
              srcset="
                ${imageUrlSm} 382w,
                ${imageUrlSm} 573w,
                ${imageUrlSm} 764w,
                ${imageUrlMd} 224w,
                ${imageUrlMd} 336w,
                ${imageUrlMd} 448w,
                ${imageUrlLg} 252w,
                ${imageUrlLg} 378w,
                ${imageUrlLg} 504w,
                ${imageUrlXl} 334w,
                ${imageUrlXl} 501w,
                ${imageUrlXl} 668w
              "
              sizes="(min-width: 1209px) 334px, (min-width: 1023px) 252px, (min-width: 767px) 224px, (min-width: 479px) 382px"
              width="1920"
              height="1080"
              alt="${imageCaption}"
              loading="lazy"
              class="w-full"
            />
          </div>
        </figure>
      </div>
      <p class="mt-10 text-blue-900 group-hover/button:text-blue-700 order-3">
        ${description}
      </p>
      <div class="button is-link mt-15 order-4">Details <span class="sr-only">zu dieser Seite</span></div>
    </a>
  `
}

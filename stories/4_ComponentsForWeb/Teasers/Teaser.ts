import { html } from 'lit'

export const Teaser = (
  title: string,
  url: string,
  description: string,
  imageUrlSm: string,
  imageUrlMd: string,
  imageUrlLg: string,
  imageUrlXl: string,
  imageCaption: string
) => {
  return html`
    <a class="group/button group/link flex flex-col hyphens-auto" href="${url}">
      <h3 class="link order-2 text-lg font-bold">${title}</h3>
      <div class="order-1 mb-20 bg-gray-50">
        <figure>
          <div class="overflow-hidden rounded bg-gray-100">
            <img
              src="${imageUrlSm}"
              srcset="
                ${imageUrlSm}  382w,
                ${imageUrlSm}  573w,
                ${imageUrlSm}  764w,
                ${imageUrlMd}  224w,
                ${imageUrlMd}  336w,
                ${imageUrlMd}  448w,
                ${imageUrlLg}  252w,
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
      <p class="order-3 mt-10 text-blue-900 group-hover/button:text-blue-700">
        ${description}
      </p>
      <div class="button is-link order-4 mt-15">
        Details <span class="sr-only">zu dieser Seite</span>
      </div>
    </a>
  `
}

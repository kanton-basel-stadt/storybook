import { EasyToReadButton } from '../Buttons/EasyToReadButton'
import { html } from 'lit'

export const ContentHeader = (title: string, lead: string, easyToReadUrl: string, hasImage: boolean, imageUrlSm: string, imageUrlMd: string, imageUrlLg: string, imageUrlXl: string, imageCaption: string, imageCopyRight: string) => {
  return html`
    <div class="container my-20 md:my-30 lg:my-40 xl:my-50">
      <h1 class="h1 text-green-600 hyphens-auto text-balance">${title}</h1>
      ${easyToReadUrl.length > 0 ? EasyToReadButton(easyToReadUrl) : ''}
      <p class="lead mt-30 hyphens-auto lg:hyphens-none text-pretty">
        ${lead}
      </p>
      ${ hasImage ? html`
        <figure class="mt-20 md:mt-30 lg:mt-40 xl:mt-50">
          <div class="overflow-hidden rounded bg-gray-100">
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
              width="2056"
              height="1157"
              alt="${imageCaption}"
              loading="eager"
              class="w-full"
            />
          </div>
          <figcaption class="text-xs md:flex justify-between mt-10">
            <div>${imageCaption}</div>
            <div class="text-gray-300 mt-5 md:mt-0">${imageCopyRight}</div>
          </figcaption>
        </figure>
      ` : '' }
    </div>
  `
}

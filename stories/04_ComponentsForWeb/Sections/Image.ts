import { html } from 'lit'

export const Image = (
  imageUrlXl: string,
  imageUrlLg: string,
  imageUrlMd: string,
  imageUrlSm: string,
  imageCaption: string,
  imageAlt: string,
  imageCopyRight: string
) => {
  return html` <div class="container">
    <figure class="flex w-full flex-col items-center justify-center">
      <picture>
        <source media="(min-width: 1209px)" srcset="${imageUrlXl}" />
        <source media="(min-width: 1023px)" srcset="${imageUrlLg}" />
        <source media="(min-width: 767px)" srcset="${imageUrlMd}" />
        <img
          alt="${imageAlt}"
          class="w-full"
          height="225"
          loading="lazy"
          src="${imageUrlSm}"
          width="400"
        />
      </picture>
      <figcaption
        class="mt-10 justify-between text-xs text-gray-700 md:flex md:w-full"
      >
        <div>${imageCaption}</div>
        <div>©${imageCopyRight}</div>
      </figcaption>
    </figure>
  </div>`
}

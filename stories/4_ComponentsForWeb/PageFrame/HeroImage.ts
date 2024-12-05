import { html } from 'lit'

export const HeroImage = (
  imageUrl3xl: string,
  imageUrl2xl: string,
  imageUrlXl: string,
  imageUrlLg: string,
  imageUrlMd: string,
  imageUrlSm: string,
  imageUrlXs: string,
  imageCaption: string,
) => {
  return html`
    <div class="h-[calc(100vh-180px)] minx[340px] maxx[550px] md:maxx[650px] xxl:maxx[750px] relative flex items-end">
      <picture class="block" aria-hidden="true">
        <source
          srcset="
            ${imageUrl3xl} 1x,
            ${imageUrl3xl} 1.5x,
            ${imageUrl3xl} 2x
          "
          media="(min-width: 3000px)"
          width="3828"
          height="750"
        />
        <source
          srcset="
            ${imageUrl2xl} 1x,
            ${imageUrl2xl} 1.5x,
            ${imageUrl2xl} 2x
          "
          media="(min-width: 2400px)"
          width="2560"
          height="750"
        />
        <source
          srcset="
            ${imageUrlXl} 1x,
            ${imageUrlXl} 1.5x,
            ${imageUrlXl} 2x
          "
          media="(min-width: 1920px)"
          width="1920"
          height="750"
        />
        <source
          srcset="
            ${imageUrlLg} 1x,
            ${imageUrlLg} 1.5x,
            ${imageUrlLg} 2x
          "
          media="(min-width: 1210px)"
          width="1680"
          height="650"
        />
        <source
          srcset="
            ${imageUrlMd} 1x,
            ${imageUrlMd} 1.5x,
            ${imageUrlMd} 2x
          "
          media="(min-width: 1024px)"
          width="1024"
          height="650"
        />
        <source
          srcset="
            ${imageUrlSm} 1x,
            ${imageUrlSm} 1.5x,
            ${imageUrlSm} 2x
          "
          media="(min-width: 768px)"
          width="800"
          height="650"
        />
        <source
          srcset="
            ${imageUrlXs} 1x,
            ${imageUrlXs} 1.5x,
            ${imageUrlXs} 2x
          "
          media=""
          width="600"
          height="550"
        />
        <img
          alt="${imageCaption}"
          src="${imageUrlXs}"
          loading="eager"
          class="absolute inset-0 object-cover object-center w-full h-full"
        />
      </picture>
    </div>
  `
}

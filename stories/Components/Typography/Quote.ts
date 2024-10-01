import { html } from 'lit'

export const Quote = (title: string, quote: string, imageUrl: string, name: string, role: string) => {
  return html`
    <div class="mb-20 mt-30 container paragraph--margin">
      <div class="bg-primary-50 rounded">
        <h3 class="text-primary-700 text-xs font-bold p-20 mb-20">
          ${ title }
        </h3>
        <div class="px-20 lg:px-30 xl:px-50 pb-30">
          <figure class="flex flex-col md:flex-row mb-20 md:gap-20 items-center">
            <blockquote>
              <p
                class="italic after:text-primary-700 before:text-primary-700 font-medium md:text-2xl md:mb-0 mb-20 text-xl before:content-['«'] after:content-['»'] mobile-only:hyphens-auto text-pretty">
                ${ quote }
              </p>
            </blockquote>
            <div class="size-140 rounded-full overflow-hidden shrink-0 ml-auto mt-10 md:mt-0">
              <img
                src="${ imageUrl }"
                sizes="(min-width: 479px) 140px"
                width="5494"
                height="5494"
                alt="Portraitbild ${ name }"
                loading="lazy"
                class="w-full"
              />
            </div>
          </figure>
          <figcaption class="sm:flex sm:gap-10 sm:justify-end text-end text-xs">
            <strong class="block sm:inline text-nowrap">${ name }</strong>
            <span class="text-gray-700">${ role }</span>
          </figcaption>
        </div>
      </div>
    </div>
  `
}

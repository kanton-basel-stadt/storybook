import { html } from 'lit'

export const Quote = (
  title: string,
  quote: string,
  imageUrl: string,
  name: string,
  role: string
) => {
  return html`
    <div class="container paragraph--margin mb-20 mt-30">
      <div class="rounded bg-primary-50">
        <h3 class="mb-20 p-20 text-xs font-bold text-primary-700">${title}</h3>
        <div class="px-20 pb-30 lg:px-30 xl:px-50">
          <figure
            class="mb-20 flex flex-col items-center md:flex-row md:gap-20"
          >
            <blockquote>
              <p
                class="mb-20 text-pretty text-xl font-medium italic before:text-primary-700 before:content-['«'] after:text-primary-700 after:content-['»'] mobile-only:hyphens-auto md:mb-0 md:text-2xl"
              >
                ${quote}
              </p>
            </blockquote>
            <div
              class="ml-auto mt-10 size-140 shrink-0 overflow-hidden rounded-full md:mt-0"
            >
              <img
                src="${imageUrl}"
                sizes="(min-width: 479px) 140px"
                width="5494"
                height="5494"
                alt="Portraitbild ${name}"
                loading="lazy"
                class="w-full"
              />
            </div>
          </figure>
          <figcaption class="text-end text-xs sm:flex sm:justify-end sm:gap-10">
            <strong class="block text-nowrap sm:inline">${name}</strong>
            <span class="text-gray-700">${role}</span>
          </figcaption>
        </div>
      </div>
    </div>
  `
}

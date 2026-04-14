import { html } from 'lit'

export const Quote = (
  title: string,
  quote: string,
  imageUrl: string,
  name: string,
  role: string,
  quoteSourceTitle: string,
  quoteSourceUrl: string
) => {
  const hasTitle = Boolean(title?.trim())
  const hasImage = Boolean(imageUrl?.trim())
  const hasQuoteSource = Boolean(quoteSourceTitle?.trim())

  return html`
    <div class="container paragraph--margin mb-20 mt-30">
      <div class="rounded bg-primary-50">
        ${hasTitle
          ? html`<h3 class="mb-20 p-20 text-xs font-bold text-primary-700">
              ${title}
            </h3>`
          : null}
        <figure
          class="${!hasTitle ? 'pt-30' : ''} px-20 pb-30 lg:px-30 xl:px-50"
        >
          <div class="mb-20 flex flex-col items-center md:flex-row md:gap-20">
            <blockquote>
              <p
                class="mb-20 text-pretty text-xl font-medium italic before:text-primary-700 before:content-['«'] after:text-primary-700 after:content-['»'] mobile-only:hyphens-auto md:mb-0 md:text-2xl"
              >
                ${quote}
              </p>
            </blockquote>
            ${hasImage
              ? html`<div
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
                </div>`
              : null}
          </div>
          <figcaption
            class="${hasQuoteSource
              ? 'justify-between'
              : 'justify-end'} flex gap-10 text-xs"
          >
            ${hasQuoteSource
              ? html`<div class="flex flex-col sm:flex-row sm:gap-10">
                  <strong>Quelle</strong>
                  ${quoteSourceUrl?.trim()
                    ? html`<a
                        href="${quoteSourceUrl}"
                        class="is-link underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ${quoteSourceTitle}
                        <span class="sr-only">
                          Externer Link, wird in einem neuen Tab oder Fenster
                          geöffnet
                        </span>
                      </a>`
                    : html`<span>${quoteSourceTitle}</span>`}
                </div>`
              : null}
            <div class="flex flex-col text-end sm:flex-row sm:gap-10">
              <strong class="block text-nowrap sm:inline">${name}</strong>
              <span class="text-gray-600">${role}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  `
}

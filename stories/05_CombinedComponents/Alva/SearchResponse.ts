import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'

export const SearchResponse = (
  alvaResponse: string,
  showConsentBox: boolean
) => {
  if (showConsentBox) {
    return html`
      <section class="container relative mb-25 mt-30 scroll-m-10">
        <h2 class="mb-10 text-lg font-bold">KI-Assistent Alva</h2>
        <div
          class="flex h-[390px] flex-col rounded-large border border-gray-100 bg-green-50 px-10 pb-25 pt-10 sm:h-[250px] sm:h-[280px] lg:px-15 lg:pb-10"
        >
          <div class="flex h-full flex-col rounded-[20px]">
            <div class="ck-content mb-40 flex-1 !text-base [&>p]:text-left">
              <p>
                Guten Tag, ich bin Alva, ein experimenteller digitaler
                Assistent.
              </p>
              <p>
                Ich gebe Auskunft zu den Inhalten der Verwaltung des Kantons
                Basel-Stadt.
              </p>
              <p>
                Meine Antworten werden von einer künstlichen Intelligenz
                generiert und sind deshalb nicht immer korrekt.&nbsp;
              </p>
            </div>
            <div
              class="flex flex-col items-start justify-between gap-20 sm:flex-row sm:items-center"
            >
              <button
                class="flex items-center gap-10 rounded-full border border-blue-900 bg-white px-15 py-10 text-base text-blue-700 transition-all duration-250 ease-in-out hover:border-blue-900 hover:bg-blue-200 focus:shadow-purple-600 focus:outline-blue-900"
              >
                <span>Alva aktivieren</span>
                <span
                  class="relative size-20 overflow-hidden rounded-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all"
                >
                  <span
                    class="absolute inset-0 z-10 bg-blue-500 opacity-0 transition-all duration-500 group-hover:opacity-50"
                  ></span>
                  ${Icon('alva', {
                    '[&_svg]:animation-state-paused': true,
                    '[&_svg]:hover:animation-state-running': true,
                    '[&_svg]:relative': true,
                    '[&_svg]:z-20': true,
                    '[&_svg]:size-20': true,
                    '[&_svg]:animate-rotate-infinite': true,
                    '[&_svg]:text-white': true,
                    '[&_svg]:transition-all': true,
                    '[&_svg]:animation-duration-[4s]': true,
                  })}
                </span>
              </button>

              <a
                class="flex items-center justify-center gap-10 rounded-full border bg-white p-10 text-base text-blue-900 transition-all duration-250 ease-in-out hover:bg-blue-200 focus:outline-blue-900"
                href="https://www.bs.ch/fd/itbs/haeufig-gestellte-fragen-und-antworten-zu-alva"
                target="_blank"
              >
                ${Icon('questionmark', {
                  '[&_svg]:size-20': true,
                  '[&_svg]:rounded': true,
                })}
                <span class="sr-only">Mehr Informationen über Alva</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `
  }

  return html`
    <section class="container relative mb-25 mt-30 scroll-m-10">
      <h2 class="mb-10 text-lg font-bold">KI-Assistent Alva</h2>
      <div
        class="flex h-[390px] flex-col rounded-large border border-gray-100 bg-green-50 px-10 pb-25 pt-10 sm:h-[280px] lg:px-15 lg:pb-10"
      >
        <div
          class="after:content-[''] relative flex-1 overflow-y-hidden after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent_0%,transparent_120px,rgb(var(--color-primary-50)))]"
        >
          <p class="mb-10">${alvaResponse}</p>
        </div>
        <div
          class="flex flex-col items-start justify-between gap-20 sm:flex-row sm:items-center"
        >
          <button
            class="flex items-center gap-10 rounded-full border border-blue-900 bg-blue-900 px-15 py-10 text-base text-white transition-all duration-250 ease-in-out hover:border-blue-900 hover:bg-blue-700 focus:shadow-purple-600 focus:outline-blue-900"
          >
            <span>Gesamte Antwort</span>
            <span
              class="relative size-20 overflow-hidden rounded-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all"
            >
              <span
                class="absolute inset-0 z-10 bg-blue-500 opacity-0 transition-all duration-500 group-hover:opacity-50"
              ></span>
              ${Icon('alva', {
                '[&_svg]:animation-state-paused': true,
                '[&_svg]:hover:animation-state-running': true,
                '[&_svg]:relative': true,
                '[&_svg]:z-20': true,
                '[&_svg]:size-20': true,
                '[&_svg]:animate-rotate-infinite': true,
                '[&_svg]:text-white': true,
                '[&_svg]:transition-all': true,
                '[&_svg]:animation-duration-[4s]': true,
              })}
            </span>
          </button>
          <button
            class="flex items-center gap-10 rounded-full border border-blue-900 bg-white px-15 py-10 text-base text-blue-700 transition-all duration-250 ease-in-out hover:border-blue-900 hover:bg-blue-200 focus:shadow-purple-600 focus:outline-blue-900"
          >
            Alva deaktivieren
            ${Icon('pause', {
              '[&_svg]:size-20': true,
              '[&_svg]:rounded': true,
            })}
          </button>
        </div>
      </div>
    </section>
  `
}

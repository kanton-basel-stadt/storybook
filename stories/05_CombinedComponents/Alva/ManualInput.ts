import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'

export const ManualInput = (showConsentBox: boolean) => {
  if (showConsentBox) {
    return html`
      <section
        class="mt-30 flex items-center justify-center border-t border-gray-300 bg-primary-50 py-30"
      >
        <div
          class="mx-10 w-full max-w-[660px] text-center text-lg text-blue-900 transition-all delay-500 duration-[800ms] ease-in-out"
        >
          <div>
            <div
              class="flex h-full flex-col rounded-[20px] bg-gradient-to-b from-blue-900 to-blue-700 p-25 text-xl text-white lg:p-40"
            >
              <div
                class="ck-content [&amp;>p]:text-left is-inverted mb-40 flex-1 !text-lg"
              >
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
                  class="flex items-center gap-10 rounded-full border border-primary-100 bg-white px-15 py-10 text-base text-blue-700 transition-all duration-250 ease-in-out hover:border-blue-900 hover:bg-blue-200 focus:shadow-white focus:outline-blue-900"
                >
                  <span>Alva aktivieren</span
                  ><span
                    class="relative size-20 overflow-hidden rounded-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all"
                    ><span
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
                    })}</span
                  ></button
                ><a
                  class="flex size-[42px] items-center justify-center gap-10 rounded-full border border-primary-100 bg-white text-base text-blue-900 transition-all duration-250 ease-in-out hover:bg-blue-200 focus:shadow-white focus:outline-blue-900"
                  href="/organisation"
                  target="_blank"
                >
                  ${Icon('questionmark', {
                    '[&_svg]:size-20': true,
                    '[&_svg]:rounded': true,
                  })}
                  <span class="sr-only">Mehr Informationen über Alva</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  return html`
    <section
      class="mt-30 flex items-center justify-center border-t border-gray-300 bg-primary-50 py-30"
    >
      <div
        class="mx-10 w-full max-w-[660px] text-center text-lg text-blue-900 transition-all delay-500 duration-[800ms] ease-in-out"
      >
        <div>
          <div class="flex h-[250px] flex-col items-center justify-center">
            <h3 class="font-bold">Nicht fündig geworden?</h3>
            <p class="mb-30">Fragen Sie unseren KI-Assistenten Alva</p>
            <div class="relative h-50 w-full">
              <div
                class="grid w-full grid-cols-[1fr_auto] overflow-hidden rounded-[24px] border bg-white text-gray-600 transition-all duration-150 ease-in-out focus-within:!border-purple-500 focus-within:!shadow-purple-600 hover:shadow-purple-600-small"
                role="search"
              >
                <label
                  for="searchinput"
                  class="relative col-span-1 row-start-1 block"
                >
                  <span class="sr-only">Ihre Frage</span>
                  <input
                    id="searchinput"
                    type="search"
                    autocomplete="off"
                    name="searchterm"
                    class="search-input relative h-[48px] w-full bg-white pl-20 pr-30 text-gray-900 placeholder:text-gray-700 focus:outline-none"
                    spellcheck="false"
                    aria-label="Ihre Frage eingeben"
                    placeholder="Ihre Frage"
                    focus-on-load="false"
                  />
                </label>
                <button
                  type="submit"
                  class="button is-strong row-start-1 m-[4px]"
                >
                  Frage stellen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

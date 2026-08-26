import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'

export const QuestionsBox = (questions: string[], showConsentBox: boolean) => {
  if (showConsentBox) {
    return html`
      <section class="border-t border-t-gray-200 bg-white">
        <div class="container">
          <div>
            <div class="py-20">
              <h2 class="mb-25 text-lg font-bold">KI-Assistent Alva</h2>
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
                      Ich gebe Auskunft zu den Inhalten der Verwaltung des
                      Kantons Basel-Stadt.
                    </p>
                    <p>
                      Meine Antworten werden von einer künstlichen Intelligenz
                      generiert und sind deshalb nicht immer korrekt.&nbsp;
                    </p>
                  </div>
                  <div
                    class="flex flex-col items-start justify-between gap-20 sm:flex-row sm:items-center"
                  >
                    <!-- Alva button --><button
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
                      >${Icon('questionmark', {
                        '[&_svg]:size-20': true,
                        '[&_svg]:rounded': true,
                      })}<span class="sr-only"
                        >Mehr Informationen über Alva</span
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  return html`
    <section class="border-t border-t-gray-200 bg-white">
      <div class="container">
        <!--v-if--><!--v-if-->
        <div>
          <div class="py-20">
            <h2 class="mb-25 text-lg font-bold">KI-Assistent Alva</h2>
            <div>
              <ul class="grid grid-cols-1 gap-20 md:grid-cols-3">
                ${questions.map(
                  (question) => html`
                    <li>
                      <button
                        class="before:content-[''] group relative block w-full overflow-hidden rounded-[16px] border border-transparent bg-[linear-gradient(285deg,rgba(232,218,244,0.65)_0.01%,rgba(219,249,255,0.65)_34.18%,rgba(221,236,222,0.65)_102.14%)] p-20 text-left shadow-[0_12px_32px_-10px_rgba(232,218,244,0)] transition-shadow duration-250 ease-in-out before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(231.99%_123.23%_at_9.04%_16.86%,#f2f7f3_65.38%,#e8f8f7_100%)] before:opacity-100 before:shadow-none before:transition-opacity before:duration-250 before:ease-in-out focus-within:border-purple-600 focus-within:shadow-[0_12px_32px_-10px_rgba(169,122,196,0.4)] focus-within:outline-none hover:shadow-[0_12px_32px_-10px_rgba(232,218,244,0.5)] hover:before:opacity-0 focus:border-purple-600 focus:shadow-[0_12px_32px_-10px_rgba(169,122,196,0.4)] focus:outline-none focus-visible:border-purple-600 focus-visible:shadow-[0_12px_32px_-10px_rgba(169,122,196,0.4)] focus-visible:outline-none lg:px-50 lg:py-30"
                      >
                        <span
                          class="before:content-['«'] after:content-['»'] relative block text-balance text-lg font-medium italic text-blue-900 before:text-primary-700 after:text-primary-700"
                        >
                          ${question}
                        </span>
                      </button>
                    </li>
                  `
                )}
              </ul>
              <!--v-if-->
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

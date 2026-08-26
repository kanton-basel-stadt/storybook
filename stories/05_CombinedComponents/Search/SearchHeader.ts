import { Icon } from '../../03_Basics/Icon'
import { html } from 'lit'

export const SearchHeader = () => {
  return html`
    <section>
      <div class="container">
        <h2 class="my-20 text-2xl font-bold text-primary-600 md:text-5xl">
          Suche
        </h2>
      </div>
      <div class="border-t-2 border-gray-300 bg-green-100 pt-30 pb-20">
        <form class="container">
          <div class="relative h-50">
            <div
              class="grid w-full grid-cols-[1fr_auto] overflow-hidden rounded-[24px] border bg-white text-gray-600 transition-all duration-150 ease-in-out focus-within:!border-purple-500 focus-within:!shadow-purple-600 hover:shadow-purple-600-small"
              role="search"
            >
              <label
                class="relative col-span-1 row-start-1 block"
                for="searchinput"
              >
                <span class="sr-only"
                  >Fragen Sie mich etwas über Basel-Stadt.</span
                >
                <input
                  aria-label="Suchbegriff eingeben"
                  autocomplete="off"
                  class="search-input relative h-[48px] w-full bg-white pl-20 text-gray-900 placeholder:absolute placeholder:top-[50%] placeholder:translate-y-[-50%] placeholder:whitespace-pre-line placeholder:text-gray-700 focus:outline-none"
                  id="searchinput"
                  name="searchterm"
                  placeholder="Fragen Sie mich etwas über Basel-Stadt."
                  spellcheck="false"
                  type="search"
                />
              </label>
              <button
                class="is-grey-strong is-icon-only row-start-1 m-[4px] h-40 w-40 rounded-full border-0 bg-gray-300 pl-6 text-gray-700 hover:bg-blue-900 hover:text-white"
                type="submit"
              >
                ${Icon('arrow-east-thin', {
                  '[&_svg]:size-30': true,
                  '[&_svg]:rotate-[-90deg]': true,
                })}
                <span class="sr-only">Suchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `
}

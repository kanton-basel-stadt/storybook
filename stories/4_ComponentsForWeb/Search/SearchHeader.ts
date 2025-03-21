import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export const SearchHeader = () => {
  return html`
    <section class="bg-primary-100 py-30 lg:py-50">
      <div class="container">
        <h2
          class="mb-30 text-2xl font-bold text-primary-700 md:text-5xl lg:mb-40"
        >
          Suche
        </h2>
        <form>
          <div class="relative h-50">
            <div
              class="hover:shadow-purple-600-small grid w-full grid-cols-[1fr_auto] overflow-hidden rounded-[24px] border bg-white text-gray-600 transition-all duration-150 ease-in-out focus-within:!border-purple-500 focus-within:!shadow-purple-600"
              role="search"
            >
              <label
                class="relative col-span-1 row-start-1 block"
                for="searchinput"
              >
                <span class="sr-only">Suchbegriff</span>
                <input
                  aria-label="Suchbegriff eingeben"
                  autocomplete="off"
                  class="search-input relative h-[48px] w-full bg-white pl-20 text-gray-900 placeholder:text-gray-700 focus:outline-none"
                  id="searchinput"
                  name="searchterm"
                  placeholder="Suchbegriff eingeben"
                  spellcheck="false"
                  type="search"
                />
              </label>
              <button
                class="button is-strong mobile-only:is-icon-only row-start-1 m-[4px]"
                type="submit"
              >
                ${Icon('search')}
                <span class="sr-only md:not-sr-only">Suchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `
}

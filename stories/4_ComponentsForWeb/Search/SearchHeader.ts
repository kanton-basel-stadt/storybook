import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export const SearchHeader = () => {
  return html`
    <section class="bg-primary-100 py-30 lg:py-50">
      <div class="container">
        <h2
          class="md:text-5xl text-2xl font-bold mb-30 text-primary-700 lg:mb-40"
        >
          Suche
        </h2>
        <form>
          <div class="relative h-50">
            <div
              class="grid grid-cols-[1fr_auto] w-full overflow-hidden bg-white text-gray-600 border rounded-[24px] focus-within:border-purple-500 focus-within:shadow-purple-600"
              role="search"
            >
              <label
                class="block col-span-1 row-start-1 relative"
                for="searchinput"
              >
                <span class="sr-only">Suchbegriff</span>
                <input
                  aria-label="Suchbegriff eingeben"
                  aria-owns="searchterm-suggestions"
                  autocomplete="off"
                  class="bg-white text-gray-900 focus:outline-none h-[48px] pl-20 search-input w-full relative placeholder:text-gray-700"
                  id="searchinput"
                  name="searchterm"
                  placeholder="Suchbegriff eingeben"
                  spellcheck="false"
                  type="search"
                />
              </label>
              <button
                class="button m-[4px] is-strong row-start-1 mobile-only:is-icon-only"
                type="submit"
              >
                ${Icon('search')}
                <span class="md:not-sr-only sr-only">Suchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `
}

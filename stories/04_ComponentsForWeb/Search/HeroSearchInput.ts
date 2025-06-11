import { Icon } from '../Icons/Icon'
import { html } from 'lit'

export const HeroSearchInput = () => {
  return html`
    <div
      class="relative flex-1 bg-gradient-to-t from-body/45 from-30% to-body/0 pb-15 pt-30 md:pb-20 md:pt-50 lg:pt-90 xl:pt-100 xxl:pb-25"
    >
      <div class="container lg:max-w-[750px]">
        <h2
          class="mb-10 font-sans text-2xl font-bold text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] md:mb-20 md:text-3xl lg:text-4xl xl:text-5xl"
        >
          Stichwortsuche
        </h2>
        <form>
          <div class="relative h-50">
            <div
              class="grid w-full grid-cols-[1fr_auto] overflow-hidden rounded-[24px] border bg-white text-gray-600 transition-all duration-150 ease-in-out focus-within:!border-purple-500 focus-within:!shadow-purple-600 hover:shadow-purple-600-small"
              role="search"
            >
              <label
                for="searchinput"
                class="relative col-span-1 row-start-1 block"
              >
                <span class="sr-only">Suchbegriff</span>
                <input
                  id="searchinput"
                  type="search"
                  autocomplete="off"
                  name="searchterm"
                  class="search-input relative h-[48px] w-full bg-white pl-20 text-gray-900 placeholder-gray-700 focus:outline-none"
                  spellcheck="false"
                  aria-label="Suchbegriff eingeben"
                  placeholder="Suchbegriff eingeben"
                />
              </label>
              <button
                type="submit"
                class="button is-strong mobile-only:is-icon-only row-start-1 m-[4px]"
              >
                ${Icon('search')}
                <span class="sr-only md:not-sr-only">Suchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
}

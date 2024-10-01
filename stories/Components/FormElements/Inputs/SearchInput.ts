import { Icon } from '../../Icons/Icon'
import { html } from 'lit'

export const SearchInput = () => {
  return html`
    <div class="bg-gradient-to-t from-body/45 from-30% to-body/0 flex-1 relative pt-30 md:pt-50 lg:pt-90 xl:pt-100 pb-15 md:pb-20 xxl:pb-25">
      <div class="container lg:max-w-[750px]">
        <h2 class="md:mb-20 mb-10 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]">Stichwortsuche</h2>
        <form>
          <div class="relative h-50">
            <div class="grid grid-cols-[1fr_auto] w-full overflow-hidden bg-white text-gray-600 border rounded-[24px] focus-within:border-purple-500 focus-within:shadow-purple-600" role="search">
              <label for="searchinput" class="block col-span-1 row-start-1 relative">
                <span class="sr-only">Suchbegriff</span>
                <input
                    id="searchinput"
                    type="search"
                    autocomplete="off"
                    name="searchterm"
                    class="bg-white text-gray-900 focus:outline-none h-[48px] pl-20 search-input w-full relative placeholder-gray-700"
                    spellcheck="false"
                    aria-owns="searchterm-suggestions"
                    aria-label="Suchbegriff eingeben"
                    placeholder="Suchbegriff eingeben"
                />
              </label>
              <button type="submit" class="button m-[4px] is-strong row-start-1 mobile-only:is-icon-only">
                ${Icon('search')}
                <span class="md:not-sr-only sr-only">Suchen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
}

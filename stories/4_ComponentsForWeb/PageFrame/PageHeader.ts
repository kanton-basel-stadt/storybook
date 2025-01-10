import { html } from 'lit'

import '@kanton-basel-stadt/designsystem/icons/symbol/baselstab'
import '@kanton-basel-stadt/designsystem/icons/symbol/search'
import '@kanton-basel-stadt/designsystem/icons/symbol/dots'
import { Icon } from '../Icons/Icon'

export const PageHeader = () => {
  return html`
    <div
      class="sticky top-0 z-app-top border-b border-b-gray-400 bg-white transition duration-250 ease-in-out will-change-transform"
    >
      <div>
        <header
          class="page-header container is-wide relative grid items-center"
        >
          <h1 class="sr-only">Hauptnavigation</h1>
          <div class="grid-area-l relative z-30 flex items-center">
            <a
              class="nuxt-link-exact-active inline-block hover:opacity-80"
              href="/"
            >
              <div
                class="relative flex whitespace-nowrap text-base leading-none lg:text-lg xl:text-2xl"
              >
                ${Icon('baselstab', {
                  '[&_svg]:translate-y-1': true,
                  '[&_svg]:mt-[0.18em]': true,
                  '[&_svg]:text-[0.59em]': true,
                  '[&_svg]:w-[1em]': true,
                  '[&_svg]:h-[1.7em]': true,
                })}
                <span
                  class="ml-[0.3em] h-[1.2083em] border-l border-gray-900 pl-[0.25em] font-bold leading-[1.2em]"
                  ><span class="sr-only">Herausgeber: </span> Kanton Basel-Stadt
                </span>
              </div>
              <span class="sr-only"> (Dieser Link führt zur Startseite) </span>
            </a>
          </div>
          <div class="grid-area-m flex justify-end gap-10">
            <div
              class="absolute inset-x-0 top-0 z-20 flex w-auto flex-row items-center justify-end gap-10 bg-white px-15 pb-[14px] pt-60 md:static md:!flex md:size-auto md:overflow-visible md:p-0"
              style="display: none;"
            >
              <div class="md:relative">
                <button
                  aria-controls="language-switcher-list"
                  aria-expanded="false"
                  aria-label="Verfügbare Sprachen anzeigen. Aktuelle Sprache ist Deutsch"
                  class="button is-sm is-dropdown"
                  id="language-switcher-button"
                  type="button"
                >
                  <span
                    class="inline-block min-w-20 text-left uppercase"
                    title="Deutsch"
                    >de</span
                  >
                </button>
              </div>
              <div>
                <a
                  class="button is-sm is-link"
                  href="https://ekonto.egov.bs.ch"
                  target="_blank"
                  >ePortal
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></a
                >
              </div>
            </div>
            <a class="button is-icon-only is-sm relative z-30" href="/suche">
              <span class="sr-only"
                >Öffnet die Suchseite und fokussiert automatisch das
                Suchfeld</span
              >
              ${Icon('search', { '[&_svg]:translate-y-1': true })}
            </a>
            <button
              class="button is-icon-only is-sm relative z-20 flex !items-center justify-center !gap-0 !px-5 py-0 md:!hidden"
            >
              <span class="sr-only">Menü aufklappen</span>
              ${Icon('dots', { '[&_svg]:translate-y-1': true })}
            </button>
          </div>
          <div class="grid-area-n relative z-10 flex justify-center">
            <div
              class="text-toggle-switch text-lg transition duration-300 ease-swing will-change-transform md:transition-none lg:text-sm xl:text-xl"
            >
              <nav
                aria-label="Hauptnavigation"
                class="text-toggle-switch-inner"
              >
                <a href="/themen"><span>Themen</span></a>
                <a href="/organisation"><span>Organisation</span></a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  `
}

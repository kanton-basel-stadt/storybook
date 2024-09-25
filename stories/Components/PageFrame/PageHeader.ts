import { html } from 'lit'

import '@kanton-basel-stadt/designsystem/icons/symbol/baselstab'
import '@kanton-basel-stadt/designsystem/icons/symbol/search'
import '@kanton-basel-stadt/designsystem/icons/symbol/dots'

export const PageHeader = () => {
  return html`
    <div
        class="border-b border-b-gray-400 bg-white transition ease-in-out duration-250 z-app-top will-change-transform top-0 sticky">
      <div>
        <header class="page-header grid items-center relative container is-wide"><h1 class="sr-only">Hauptnavigation</h1>
          <div class="flex items-center grid-area-l relative z-30"><a
              class="nuxt-link-exact-active inline-block hover:opacity-80" href="/">
            <div class="flex whitespace-nowrap leading-none relative text-base lg:text-lg xl:text-2xl">
              <icon-symbol-baselstab aria-hidden="true" class="[&>svg]:mt-[0.18em] [&>svg]:text-[0.59em] [&>svg]:w-[1em] [&>svg]:h-[1.7em]"></icon-symbol-baselstab>
              <span class="h-[1.2083em] ml-[0.3em] pl-[0.25em] leading-[1.2em] border-l border-gray-900 font-bold"><span
                  class="sr-only">Herausgeber: </span> Kanton Basel-Stadt </span></div>
            <span class="sr-only"> (Dieser Link führt zur Startseite) </span></a></div>
          <div class="grid-area-m flex gap-10 justify-end">
            <div class="flex flex-row gap-10 justify-end items-center absolute top-0 bg-white pt-60 pb-[14px] inset-x-0 md:!flex w-auto px-15 z-20 md:static md:size-auto md:p-0 md:overflow-visible"
                 style="display:none;">
              <div class="md:relative">
                <button aria-controls="language-switcher-list" aria-expanded="false"
                        aria-label="Verfügbare Sprachen anzeigen. Aktuelle Sprache ist Deutsch" class="button is-sm is-dropdown"
                        id="language-switcher-button" type="button"><span
                    class="uppercase inline-block min-w-20 text-left" title="Deutsch">de</span></button>
              </div>
              <div><a class="button is-sm is-link" href="https://ekonto.egov.bs.ch" target="_blank">ePortal <span
                  class="sr-only">Externer Link, wird in einem neuen Tab oder Fenster geöffnet</span></a></div>
            </div>
            <a class="button is-icon-only is-sm relative z-30" href="/suche">
              <span class="sr-only">Öffnet die Suchseite und fokussiert automatisch das Suchfeld</span>
              <icon-symbol-search aria-hidden="true" class="[&>svg]:translate-y-1"/>
            </a>
            <button class="button is-sm md:!hidden relative z-20 !px-5 py-0 !items-center flex justify-center !gap-0">
              <icon-symbol-dots aria-hidden="true" class="[&>svg]:translate-y-1"/>
            </button>
          </div>
          <div class="grid-area-n flex justify-center relative z-10">
            <div
                class="text-toggle-switch text-lg lg:text-sm xl:text-xl transition md:transition-none duration-300 ease-swing will-change-transform">
              <nav aria-label="Hauptnavigation" class="text-toggle-switch-inner">
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

import { html } from 'lit'
import { Icon } from '../Icons/Icon'

export const PageFooter = () => {
  return html`
    <hr class="h-100 border-none bg-green-500" />
    <footer class="bg-gray-200 py-20 lg:py-40 print:hidden">
      <h1 class="sr-only">Fusszeile</h1>
      <div class="container flex flex-col gap-25">
        <nav aria-label="Schnellzugriffs-Navigationsmenü">
          <ul class="flex flex-wrap gap-5 font-medium">
            <li>
              <a
                class="button is-sm is-link"
                href="/themen/arbeit-steuern/stellenbesetzung-arbeitslosigkeit/offene-stellen/offene-stellen-beim-kanton"
                >Kanton Basel-Stadt als Arbeitgeber</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://map.geo.bs.ch/"
                target="_blank"
                >Stadtplan &amp; Karte</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://staatskalender.bs.ch"
                target="_blank"
              >
                Kontakte &amp; Adressen</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.gesetzessammlung.bs.ch/"
                target="_blank"
              >
                Gesetzessammlung</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://statistik.bs.ch"
                target="_blank"
              >
                Statistiken</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.basel.com/de"
                target="_blank"
              >
                Tourismus</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.bs.ch/veranstaltungen"
                >Veranstaltungen</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.bs.ch/publikationen"
                >Publikationen</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.bs.ch/medien/medienmitteilungen"
                >Medien</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://kantonsblatt.ch"
                target="_blank"
              >
                Kantonsblatt</a
              >
            </li>
            <li>
              <a
                class="button is-sm is-link"
                href="https://www.bs.ch/apps/multimedia-datenbank"
                target="_blank"
                >Bilddatenbank des Kanton Basel-Stadt</a
              >
            </li>
          </ul>
        </nav>
        <nav aria-label="Menü für Soziale Medien">
          <ul class="flex flex-wrap gap-5 font-medium">
            <li>
              <a
                class="button is-sm is-icon-only"
                href="https://twitter.com/baselstadt"
                aria-label="Twitter"
                target="_blank"
              >
                ${Icon('x_formerly_twitter')}
                <span class="sr-only"
                  >Twitter
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></span
                >
              </a>
            </li>
            <li>
              <a
                class="button is-sm is-icon-only"
                href="https://www.facebook.com/Rathaus.Basel"
                aria-label="Facebook"
                target="_blank"
              >
                ${Icon('facebook')}
                <span class="sr-only"
                  >Facebook
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></span
                >
              </a>
            </li>
            <li>
              <a
                class="button is-sm is-icon-only"
                href="https://www.instagram.com/kantonbaselstadt/"
                aria-label="Instagram"
                target="_blank"
              >
                ${Icon('instagram')}
                <span class="sr-only"
                  >Instagram
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></span
                >
              </a>
            </li>
            <li>
              <a
                class="button is-sm is-icon-only"
                href="https://www.youtube.com/user/kantonbaselstadt/videos"
                aria-label="Youtube"
                target="_blank"
              >
                ${Icon('youtube')}
                <span class="sr-only"
                  >Youtube
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></span
                >
              </a>
            </li>
            <li>
              <a
                class="button is-sm is-icon-only"
                href="https://www.linkedin.com/company/kanton-basel-stadt/"
                aria-label="Linkedin"
                target="_blank"
              >
                ${Icon('linkedin')}
                <span class="sr-only"
                  >Linkedin
                  <span class="sr-only"
                    >Externer Link, wird in einem neuen Tab oder Fenster
                    geöffnet</span
                  ></span
                >
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Metadatenmenü">
          <ul class="flex flex-wrap gap-x-15 gap-y-10 font-medium">
            <li>
              <a
                class="nuxt-link-exact-active link text-sm underline decoration-white underline-offset-4 hover:decoration-blue-700"
                href="/"
                >Startseite</a
              >
            </li>
            <li>
              <a
                class="link text-sm underline decoration-white underline-offset-4 hover:decoration-blue-700"
                href="/datenschutzerklaerung"
                >Datenschutz</a
              >
            </li>
            <li>
              <a
                class="link text-sm underline decoration-white underline-offset-4 hover:decoration-blue-700"
                href="/impressum"
                >Impressum</a
              >
            </li>
            <li>
              <a
                class="link text-sm underline decoration-white underline-offset-4 hover:decoration-blue-700"
                href="/taxonomy/term/1797"
                >Ombudsstelle</a
              >
            </li>
          </ul>
        </nav>
        <div class="text-sm font-bold text-blue-900">© 2024 Basel-Stadt</div>
      </div>
    </footer>
  `
}

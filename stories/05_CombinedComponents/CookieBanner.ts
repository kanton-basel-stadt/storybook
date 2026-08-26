import { html } from 'lit'

export const CookieBanner = () => {
  return html`
    <div
      class="fixed bottom-0 z-[99999] w-full bg-green-100 px-20 py-40 shadow-[4px_0_20px_0_rgba(0,0,0,0.15)] md:px-50"
    >
      <div
        class="flex flex-col gap-25 md:flex-row md:items-center md:gap-20 lg:container"
      >
        <div class="flex-1">
          <p class="mb-10 text-lg">
            Zu statistischen Zwecken und zur Verbesserung unseres Angebots
            werden Informationen, die uns ihr Zugangsgerät und ihr Browser beim
            Aufruf dieser Webseite automatisch mitteilt, erfasst und bearbeitet.
            Dieser Vorgang erfolgt anonymisiert und entfernt somit den Bezug zu
            Ihrer Person.
          </p>
          <p class="mb-10 text-lg">
            Ihre Daten werden ausschliesslich von uns verwendet. Eine Weitergabe
            an Dritte erfolgt nicht.
          </p>
          <div class="text-lg">
            Weitere Informationen finden Sie in unserer
            <a href="https://www.bs.ch/datenschutzerklaerung" class="link"
              >Datenschutzerklärung</a
            >.
          </div>
        </div>
        <div class="flex flex-col items-start gap-10">
          <button class="button is-strong is-check">
            Weiter mit allen Cookies
          </button>
          <button class="button is-check">
            Weiter mit erforderlichen Cookies
          </button>
        </div>
      </div>
    </div>
  `
}

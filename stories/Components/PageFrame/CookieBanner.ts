import { html } from 'lit'



export const CookieBanner = () => {
  return html`
    <div
        class="py-40 px-20 md:px-50 fixed bottom-0 w-full z-[99999] shadow-[4px_0_20px_0_rgba(0,0,0,0.15)] bg-green-100">
      <div class="lg:container flex flex-col md:flex-row md:items-center gap-25 md:gap-20">
        <div class="flex-1">
          <p class="text-lg mb-10">
            Zu statistischen Zwecken und zur Verbesserung unseres Angebots werden Informationen, die uns ihr
            Zugangsgerät und ihr Browser beim Aufruf dieser Webseite automatisch mitteilt, erfasst und bearbeitet.
            Dieser Vorgang erfolgt
            anonymisiert und entfernt somit den Bezug zu Ihrer Person.
          </p>
          <p class="text-lg mb-10">Ihre Daten werden ausschliesslich von uns verwendet. Eine Weitergabe an Dritte
            erfolgt nicht.</p>
          <div class="text-lg">Weitere Informationen finden Sie in unserer <a
              href="https://www.bs.ch/datenschutzerklaerung" class="link">Datenschutzerklärung</a>.
          </div>
        </div>
        <div class="flex flex-col gap-10 items-start">
          <button class="button is-strong is-check">Weiter mit allen Cookies</button>
          <button class="button is-check">Weiter mit erforderlichen Cookies</button>
        </div>
      </div>
    </div>
  `
}

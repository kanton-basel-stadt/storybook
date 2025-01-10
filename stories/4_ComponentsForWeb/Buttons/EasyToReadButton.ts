import { html } from 'lit'

export const EasyToReadButton = (url: string) => {
  return html`
    <a
      href="${url}"
      class="my-20 inline-flex cursor-pointer flex-nowrap items-center gap-10 rounded bg-[#333399] pr-20 text-lg text-white transition-all duration-250 ease-in-out hover:opacity-80"
    >
      <icon-symbol-easy-to-read
        class="[&amp;_svg]:size-70 [&amp;_svg]:rounded"
        aria-hidden="true"
      ></icon-symbol-easy-to-read>
      Seite in leichter Sprache anzeigen
    </a>
  `
}

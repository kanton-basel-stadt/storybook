import { html } from 'lit'

export const EasyToReadButton = (
  url: string
) => {
  return html`
    <a
      href="${ url }"
      class="bg-[#333399] text-white rounded pr-20 cursor-pointer text-lg inline-flex flex-nowrap items-center gap-10 transition-all ease-in-out duration-250 hover:opacity-80 my-20"
    >
      <icon-symbol-easy-to-read class="[&>svg]:size-70 [&>svg]:rounded" aria-hidden="true"></icon-symbol-easy-to-read>
      Seite in leichter Sprache anzeigen
    </a>
  `
}

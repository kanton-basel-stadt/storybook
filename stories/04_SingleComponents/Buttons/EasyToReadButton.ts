import { html } from 'lit'
import { Icon } from '../../03_Basics/Icon'

export const EasyToReadButton = (url: string) => {
  return html`
    <a
      href="${url}"
      class="my-20 inline-flex cursor-pointer flex-nowrap items-center gap-10 rounded bg-[#333399] pr-20 text-lg text-white transition-all duration-250 ease-in-out hover:opacity-80"
    >
      ${Icon('easy-to-read', {
        '[&_svg]:size-70': true,
        '[&_svg]:rounded': true,
      })}
      Seite in leichter Sprache anzeigen
    </a>
  `
}

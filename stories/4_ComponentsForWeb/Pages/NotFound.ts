import { html } from 'lit'
import { PageHeader } from '../PageFrame/PageHeader'
import { PageFooter } from '../PageFrame/PageFooter'

export const NotFound = () => html`
  ${PageHeader()}
  <div class="relative flex items-end justify-center overflow-hidden h-[calc(100vh-var(--page-header-height))]">
    <h1 class="container relative z-30 w-full text-white text-5xl font-bold mb-40">
      Seite nicht gefunden
    </h1>
    <video aria-hidden="true" autoplay="" class="motion-reduce:hidden absolute z-10 w-auto min-w-full min-h-full object-cover" loop="" muted="">
      <source src="404.mp4" type="video/mp4">
    </video>
  </div>
  ${PageFooter()}
`



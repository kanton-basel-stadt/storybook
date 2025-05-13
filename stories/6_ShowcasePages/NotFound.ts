import { html } from 'lit'
import { PageHeader } from '../4_ComponentsForWeb/PageFrame/PageHeader'
import { PageFooter } from '../4_ComponentsForWeb/PageFrame/PageFooter'

export const NotFound = () => html`
  ${PageHeader()}
  <div
    class="relative flex h-[calc(100vh-var(--page-header-height))] items-end justify-center overflow-hidden"
  >
    <h1
      class="container relative z-30 mb-40 w-full text-5xl font-bold text-white"
    >
      Seite nicht gefunden
    </h1>
    <video
      aria-hidden="true"
      autoplay=""
      class="absolute z-10 min-h-full w-auto min-w-full object-cover motion-reduce:hidden"
      loop=""
      muted=""
    >
      <source src="404.mp4" type="video/mp4" />
    </video>
  </div>
  ${PageFooter()}
`

import { html } from 'lit'

export const LayoutSection = (title: string, content: string) => {
  return html`
    <section class="py-25 lg:py-30 xl:py-40 bg-white">
      <div class="container">
        <h2 class="pre-heading sticky top-sticky-top mobile-only:px-15 mobile-only:-mx-15 z-40 py-15 transition-all duration-250 ease-in-out -mt-15 backdrop-blur-md mb-20 text-primary-700 bg-white/80">
          ${title}
        </h2>
        ${content}
      </div>
    </section>

  `
}

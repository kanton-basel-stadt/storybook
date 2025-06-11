import { html } from 'lit'

export const LayoutSection = (title: string, content: string) => {
  return html`
    <section class="bg-white py-25 lg:py-30 xl:py-40">
      <div class="container">
        <h2
          class="pre-heading sticky top-sticky-top z-40 -mt-15 mb-20 bg-white/80 py-15 text-primary-700 backdrop-blur-md transition-all duration-250 ease-in-out mobile-only:-mx-15 mobile-only:px-15"
        >
          ${title}
        </h2>
        ${content}
      </div>
    </section>
  `
}

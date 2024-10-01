import { html } from 'lit'

export const BoxSection = (boxes: { title: string, content: string }[]) => {
  return html`
    <div class="py-25 lg:py-30 xl:py-40 bg-gray-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap">
          ${boxes.map(box => html`
            <div class="rounded-large bg-white p-10 md:p-15 lg:p-20">
              <h2 class="text-primary-600 h4 mb-10 md:mb-15">${box.title}</h2>
              <div>
                <div class="flex gap-10 flex-wrap">
                  ${box.content}
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    </div>
  `
}

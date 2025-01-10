import { html } from 'lit'

export const BoxSection = (boxes: { title: string; content: string }[]) => {
  return html`
    <div class="bg-gray-20 py-25 lg:py-30 xl:py-40">
      <div class="container">
        <div class="grid grid-cols-1 gap md:grid-cols-2">
          ${boxes.map(
            (box) => html`
              <div class="rounded-large bg-white p-10 md:p-15 lg:p-20">
                <h2 class="h4 mb-10 text-primary-600 md:mb-15">${box.title}</h2>
                <div>
                  <div class="flex flex-wrap gap-10">${box.content}</div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    </div>
  `
}

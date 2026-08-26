import { html } from 'lit'

export const ResultBox = (title: string, content: string) => {
  return html`
    <div
      class="mb-20 rounded-[20px] border-2 border-green-500 px-15 pb-40 pt-20"
    >
      <h3 class="mb-25 text-xl font-bold text-green-500">${title}</h3>
      ${content}
    </div>
  `
}

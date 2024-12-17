import { html } from 'lit'

export const ResultBox = (title: string, content: string) => {
  return html`
    <div
      class="border-2 rounded-[20px] border-green-500 px-15 pt-20 pb-40 mb-20"
    >
      <h3 class="text-xl text-green-500 font-bold mb-25">${title}</h3>
      ${content}
    </div>
  `
}

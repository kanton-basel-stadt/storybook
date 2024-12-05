import { html } from 'lit'

export const Title = (
  content: string,
  kind: 'h1' | 'h2' | 'h3'
) => {
  if (kind === 'h1') {
    return html`
      <h1 class="h1 text-green-600 hyphens-auto text-balance">
        ${content}
      </h1>
    `
  }

  if (kind === 'h2') {
    return html`
      <h2 class="h2 mb-20 lg:mb-30 mt-10 md:mt-40 xl:mt-50 scroll-mt-10 xl:pr-140">
        ${content}
      </h2>
    `
  }

  return html`
    <h3 class="font-bold mb-10 text-xl print:!text-xl">
      ${content}
    </h3>
  `
}

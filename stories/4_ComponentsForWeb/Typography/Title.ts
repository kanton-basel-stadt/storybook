import { html } from 'lit'

export const Title = (content: string, kind: 'h1' | 'h2' | 'h3') => {
  if (kind === 'h1') {
    return html`
      <h1 class="h1 hyphens-auto text-balance text-green-600">${content}</h1>
    `
  }

  if (kind === 'h2') {
    return html`
      <h2
        class="h2 mb-20 mt-10 scroll-mt-10 md:mt-40 lg:mb-30 xl:mt-50 xl:pr-140"
      >
        ${content}
      </h2>
    `
  }

  return html`
    <h3 class="mb-10 text-xl font-bold print:!text-xl">${content}</h3>
  `
}

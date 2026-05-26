import { html } from 'lit'

export const Title = (content: string, level: 'h1' | 'h2' | 'h3') => {
  if (level === 'h1') {
    return html`
      <h1 class="h1 hyphens-auto text-balance text-green-600">${content}</h1>
    `
  }

  if (level === 'h2') {
    return html` <h2 class="h2 hyphens-auto text-balance">${content}</h2> `
  }

  return html` <h3 class="h3 hyphens-auto text-balance">${content}</h3> `
}

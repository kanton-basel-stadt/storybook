import { html } from 'lit'

export const List = (type: 'ordered' | 'unordered') => {
  if (type === 'ordered') {
    return html`
      <ol class="ol">
        <li>Item</li>
        <li>Item</li>
        <li>
          <ol class="ol">
            <li>Sub-item</li>
            <li>Sub-item</li>
          </ol>
        </li>
      </ol>
    `
  }

  return html`
    <ul class="ul">
      <li>Item</li>
      <li>Item</li>
      <li>
        <ul class="ul">
          <li>Sub-item</li>
          <li>Sub-item</li>
        </ul>
      </li>
    </ul>
  `
}

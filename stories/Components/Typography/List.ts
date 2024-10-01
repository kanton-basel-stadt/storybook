import { html } from 'lit'

export const List = (
  kind: 'ordered' | 'unordered'
) => {
  if (kind === 'ordered') {
    return html`
      <ol class="ol">
        <li>
          Element 1
        </li>
        <li>
          Element 2
        </li>
        <li>
          <ol class="ol">
            <li>
              Nested 1
            </li>
            <li>
              Nested 2
            </li>
          </ol>
        </li>
      </ol>
    `
  }

  return html`
    <ul class="ul">
      <li>
        Element 1
      </li>
      <li>
        Element 2
      </li>
      <li>
        <ul class="ul">
          <li>
            Nested 1
          </li>
          <li>
            Nested 2
          </li>
        </ul>
      </li>
    </ul>
  `
}

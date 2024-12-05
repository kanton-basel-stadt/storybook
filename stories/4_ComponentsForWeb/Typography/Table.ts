import { html } from 'lit'

export const Table = () => {
  return html`<figure class="overflow-auto">
    <table class="has-mobile-style is-wide table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>First column</th>
          <th>Second column</th>
          <th>Third column</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3" data-head-label="">Row group 1</td>
          <td data-head-label="First column">Cell 1/1</td>
          <td data-head-label="Second column">Cell 1/2</td>
          <td data-head-label="Third column">Cell 1/3</td>
        </tr>
        <tr>
          <td data-head-label="">Cell 2/1</td>
          <td data-head-label="First column">Cell 2/2</td>
          <td data-head-label="Second column">Cell 2/3</td>
        </tr>
        <tr>
          <td data-head-label="">Cell 3/1</td>
          <td data-head-label="First column">Cell 3/2</td>
          <td data-head-label="Second column">Cell 3/3</td>
        </tr>
        <tr>
          <td rowspan="3" data-head-label="">Row group 2</td>
          <td data-head-label="First column">Cell 4/1</td>
          <td data-head-label="Second column">Cell 4/2</td>
          <td data-head-label="Third column">Cell 4/3</td>
        </tr>
        <tr>
          <td data-head-label="">Cell 5/1</td>
          <td data-head-label="First column">Cell 5/2</td>
          <td data-head-label="Second column">Cell 5/3</td>
        </tr>
        <tr>
          <td data-head-label="">Cell 6/1</td>
          <td data-head-label="First column">Cell 6/2</td>
          <td data-head-label="Second column">Cell 6/3</td>
        </tr>
      </tbody>
    </table>
    <figcaption>
      Example table
    </figcaption>
  </figure>
  `
}

import { html } from 'lit'
import { Icon } from '../../Icons/Icon'
import { classMap } from 'lit-html/directives/class-map.js'
import slugify from 'slugify'

export type Row = {
  label: string
  isLarge: boolean
}

export type Columns = {
  label: string
}

export const SelectableMatrix = (rows: Row[], cols: Columns[]) => {
  return html`
    <table
      style="--grid-cols: ${cols.length + 1}"
      class="weekday-percentage-input"
    >
      <thead>
        <tr>
          <th>
            <span class="sr-only">Rows</span>
          </th>
          ${cols.map(
            (c) => html`
              <th>
                <button class="header-button">
                  <span class="sr-only">Alle Tagesabschnitte auswählen am</span>
                  ${c.label} ${Icon('add')}
                </button>
              </th>
            `
          )}
        </tr>
      </thead>
      <tbody>
        ${rows.map(
          (r) => html`
            <tr>
              <td class="flex items-center justify-end">
                <button class="header-button font-bold">
                  <span class="sr-only">Alle Tage auswählen für</span>
                  ${r.label} ${Icon('add')}
                </button>
              </td>
              ${cols.map((c) => {
                const cellButtonClasses = {
                  '[:checked~&]:bg-blue-900': true,
                  '[:checked~&]:text-white': true,
                  'h-[30px]': !r.isLarge,
                  'h-[90px]': r.isLarge,
                }
                return html`
                  <td class="min-w-[125px]">
                    <input
                      type="checkbox"
                      class="hidden"
                      name="${slugify(c.label) + '-' + slugify(r.label)}"
                      id="${slugify(c.label) + '-' + slugify(r.label)}"
                      value="1"
                    />
                    <label
                      class="${classMap(cellButtonClasses)}"
                      for="${slugify(c.label) + '-' + slugify(r.label)}"
                    >
                      <span class="sr-only"> ${c.label} ${r.label} </span>
                      ${Icon('add', {
                        '[:checked~label>&]:hidden': true,
                      })}
                      ${Icon('remove', {
                        hidden: true,
                        '[:checked~label>&]:block': true,
                      })}
                    </label>
                  </td>
                `
              })}
            </tr>
          `
        )}
      </tbody>
    </table>
  `
}

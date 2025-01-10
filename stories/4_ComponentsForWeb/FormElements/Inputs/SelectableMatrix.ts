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
      class="grid grid-cols-[repeat(var(--grid-cols),minmax(125px,1fr))] gap-10"
    >
      <thead class="contents">
        <tr class="contents">
          <th class="min-w-[125px]">
            <span class="sr-only">Rows</span>
          </th>
          ${cols.map(
            (c) => html`
              <th
                class="flex min-w-[125px] items-center justify-center gap-10 py-5 font-normal"
              >
                ${c.label}

                <button
                  class="rounded-full border border-blue-900 bg-white text-blue-900 transition-all duration-250 ease-in-out hover:border-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  ${Icon('add', {
                    '[&_svg]:size-20': true,
                  })}
                  <span class="sr-only"> Ganze Spalte anwählen </span>
                </button>
              </th>
            `
          )}
        </tr>
      </thead>
      <tbody class="contents">
        ${rows.map(
          (r) => html`
            <tr class="contents">
              <td class="flex items-center justify-end gap-10 py-5">
                ${r.label}

                <button
                  class="rounded-full border border-blue-900 bg-white text-blue-900 transition-all duration-250 ease-in-out hover:border-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  ${Icon('add', {
                    '[&_svg]:size-20': true,
                  })}
                  <span class="sr-only"> Ganze Zeile anwählen </span>
                </button>
              </td>
              ${cols.map((c) => {
                const buttonClasses = {
                  flex: true,
                  'items-center': true,
                  'justify-center': true,
                  'cursor-pointer': true,
                  'transition-all': true,
                  'ease-in-out': true,
                  'duration-250': true,
                  rounded: true,
                  border: true,
                  'border-blue-900': true,
                  'hover:border-blue-400': true,
                  'bg-gray-100': true,
                  '[:checked~&]:bg-blue-900': true,
                  'hover:bg-blue-400': true,
                  'text-gray-100': true,
                  '[:checked~&]:text-white': true,
                  'hover:text-white': true,
                  'w-full': true,
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
                      class="${classMap(buttonClasses)}"
                      for="${slugify(c.label) + '-' + slugify(r.label)}"
                    >
                      <span class="sr-only"> ${c.label} ${r.label} </span>

                      ${Icon('add', {
                        '[&_svg]:size-20': true,
                        '[:checked~label>&]:hidden': true,
                      })}
                      ${Icon('remove', {
                        '[&_svg]:size-20': true,
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

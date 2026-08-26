import { html } from 'lit'
import { fieldMaxClass } from './storyClasses'

function mehrTextCorner() {
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
      class="text-gray-900"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        d="M5.5 8 8 5.5M2.5 8 8 2.5"
      />
    </svg>
  `
}
export const Textarea = (
  label: string,
  value: string,
  name: string,
  id: string,
  withIcon: boolean = false
) => {
  const labelTpl = html`<label for="${id}" class="label">${label}</label>`

  if (withIcon) {
    return html`
      ${labelTpl}
      <div class="${fieldMaxClass} relative inline-block">
        <textarea
          name="${name}"
          id="${id}"
          rows="4"
          class="input pb-24 pr-24 box-border block min-h-[120px] w-full resize-y pl-8 pt-10"
          .value=${value}
        ></textarea>
        <span
          class="pointer-events-none absolute bottom-10 right-10 flex items-end justify-end"
          aria-hidden="true"
        >
          ${mehrTextCorner()}
        </span>
      </div>
    `
  }

  return html`
    ${labelTpl}
    <textarea
      name="${name}"
      id="${id}"
      rows="4"
      class="input ${fieldMaxClass} box-border block min-h-[120px] resize-y"
      .value=${value}
    ></textarea>
  `
}

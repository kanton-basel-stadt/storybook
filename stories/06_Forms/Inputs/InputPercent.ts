import { html } from 'lit'
import { affixOuterClass, affixPercentInputClass } from './storyClasses'

export const InputPercent = (
  label: string,
  value: string,
  name: string,
  id: string
) => {
  const labelTpl = html`<label for="${id}" class="label">${label}</label>`

  return html`
    ${labelTpl}
    <div class="${affixOuterClass} justify-start gap-[4px]">
      <input
        type="text"
        inputmode="decimal"
        name="${name}"
        id="${id}"
        value="${value}"
        class="${affixPercentInputClass}"
        placeholder="0"
      />
      <span
        class="shrink-0 text-base leading-snug font-medium text-gray-700 tabular-nums"
        aria-hidden="true"
        >%</span
      >
    </div>
  `
}

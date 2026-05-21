import { html } from 'lit'
import { affixOuterClass, affixInnerClass } from './storyClasses'

export const InputCHF = (
  label: string,
  value: string,
  name: string,
  id: string
) => {
  const labelTpl = html`<label for="${id}" class="label">${label}</label>`

  return html`
    ${labelTpl}
    <div class="${affixOuterClass} gap-[4px]">
      <span
        class="shrink-0 text-base font-medium tabular-nums leading-snug text-gray-700"
        aria-hidden="true"
        >CHF</span
      >
      <input
        type="text"
        inputmode="decimal"
        autocomplete="transaction-amount"
        name="${name}"
        id="${id}"
        value="${value}"
        class="${affixInnerClass}"
        placeholder="0.00"
      />
    </div>
  `
}

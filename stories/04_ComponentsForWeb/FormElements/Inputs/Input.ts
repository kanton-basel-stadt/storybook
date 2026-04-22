import { html } from 'lit'

export type InputVariant =
  | 'default'
  | 'chf'
  | 'percent'
  | 'number-with-arrows'
  | 'textarea'
  | 'freetext-icon'

/** Breite wie Figma Interaction/Eingabe (z. B. node 28822:8604 …): 220 px. */
const fieldMaxClass = 'w-full max-w-[220px]'

/** Rahmen wie DDS `.input`; Innenfläche pl-8 pr-10 py-10 (Figma Abstände). */
const affixOuterClass = `${fieldMaxClass} inline-flex h-[46px] shrink-0 items-center overflow-hidden rounded border border-blue-900 bg-white py-10 pl-8 pr-10 transition-all duration-250 ease-in-out hover:border-blue-500 focus-within:border-purple-600 focus-within:shadow-purple-600`

const affixInnerClass =
  'min-h-0 min-w-0 flex-1 border-0 bg-transparent text-base leading-snug text-gray-900 outline-none ring-0 placeholder:text-gray-500 focus:ring-0 disabled:cursor-default disabled:text-gray-800 disabled:placeholder:text-gray-800'

/** Kein flex-1: %-Suffix direkt nach dem Zahlenwert statt rechts ausgerichtet am 220 px-Rahmen. */
const affixPercentInputClass =
  'min-h-0 min-w-[1ch] max-w-[min(100%,18ch)] flex-none grow-0 border-0 bg-transparent text-base tabular-nums leading-snug text-gray-900 outline-none ring-0 placeholder:text-gray-500 focus:ring-0 disabled:cursor-default disabled:text-gray-800 disabled:placeholder:text-gray-800 [field-sizing:content]'

/** Figma „mehr-text“: kleines Resize-Eck unten rechts (8×8), kein Stift-Icon. */
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

export const Input = (
  label: string,
  value: string,
  name: string,
  id: string,
  type: string,
  variant: InputVariant = 'default'
) => {
  const labelTpl = html`<label for="${id}" class="label">${label}</label>`

  if (variant === 'chf') {
    return html`
      ${labelTpl}
      <div class="${affixOuterClass} gap-[4px]">
        <span
          class="shrink-0 text-base font-medium tabular-nums leading-snug text-gray-600"
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

  if (variant === 'percent') {
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
          class="shrink-0 text-base font-medium tabular-nums leading-snug text-gray-600"
          aria-hidden="true"
          >%</span
        >
      </div>
    `
  }

  if (variant === 'number-with-arrows') {
    return html`
      ${labelTpl}
      <input
        type="number"
        step="any"
        name="${name}"
        id="${id}"
        value="${value}"
        class="input ${fieldMaxClass}"
      />
    `
  }

  if (variant === 'textarea') {
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

  if (variant === 'freetext-icon') {
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
    <input
      type="${type}"
      name="${name}"
      id="${id}"
      value="${value}"
      class="input ${fieldMaxClass}"
    />
  `
}

/** Breite wie Figma Interaction/Eingabe (z. B. node 28822:8604 …): 220 px. */
export const fieldMaxClass = 'w-full max-w-[220px]'

/** Rahmen wie DDS `.input`; Innenfläche pl-8 pr-10 py-10 (Figma Abstände). */
export const affixOuterClass = `${fieldMaxClass} inline-flex h-[46px] shrink-0 items-center overflow-hidden rounded border border-blue-900 bg-white py-10 pl-8 pr-10 transition-all duration-250 ease-in-out hover:border-blue-500 focus-within:border-purple-600 focus-within:shadow-purple-600`

export const affixInnerClass =
  'min-h-0 min-w-0 flex-1 border-0 bg-transparent text-base leading-snug text-gray-900 outline-none ring-0 placeholder:text-gray-500 focus:ring-0 disabled:cursor-default disabled:text-gray-800 disabled:placeholder:text-gray-800'

/** Kein flex-1: %-Suffix direkt nach dem Zahlenwert statt rechts ausgerichtet am 220 px-Rahmen. */
export const affixPercentInputClass =
  'min-h-0 min-w-[1ch] max-w-[min(100%,18ch)] flex-none grow-0 border-0 bg-transparent text-base tabular-nums leading-snug text-gray-900 outline-none ring-0 placeholder:text-gray-500 focus:ring-0 disabled:cursor-default disabled:text-gray-800 disabled:placeholder:text-gray-800 [field-sizing:content]'

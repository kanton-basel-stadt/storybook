import { html } from 'lit'

export type DropdownSelectOption = {
  label: string
  value?: string
}

export const DropdownSelect = (
  label: string,
  id: string,
  isOpen: boolean,
  canSelectMultiple: boolean,
  options: DropdownSelectOption[] = [
    { label: 'Value 1' },
    { label: 'Value 2' },
    { label: 'Value 3' },
    { label: 'Value 4' },
  ]
) => {
  const toggleOptions = (event: Event) => {
    const trigger = event.currentTarget as HTMLButtonElement
    const dropdown = trigger.closest('.dropdown')
    const popover = dropdown?.querySelector<HTMLElement>(`#${id}_popover`)
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

    trigger.setAttribute('aria-expanded', String(!isExpanded))
    dropdown?.setAttribute('data-expanded', !isExpanded ? 'true' : 'false')
    popover?.classList.toggle('hidden', isExpanded)
  }

  const selectOption = (event: Event, option: DropdownSelectOption) => {
    const optionElement = event.currentTarget as HTMLElement
    const dropdown = optionElement.closest('.dropdown')
    const trigger = dropdown?.querySelector<HTMLButtonElement>(`#${id}`)
    const triggerOption =
      trigger?.querySelector<HTMLElement>('.dropdown-option')
    const popover = dropdown?.querySelector<HTMLElement>(`#${id}_popover`)
    const options = dropdown?.querySelectorAll<HTMLElement>('[role="option"]')

    triggerOption!.textContent = option.label
    trigger?.setAttribute('data-value', option.value ?? option.label)
    trigger?.setAttribute('aria-expanded', 'false')
    dropdown?.setAttribute('data-expanded', 'false')
    popover?.classList.add('hidden')

    options?.forEach((option) => {
      option.setAttribute('aria-selected', 'false')
    })

    optionElement.setAttribute('aria-selected', 'true')
  }

  return html`
    <div
      class="dropdown"
      data-multiple="${canSelectMultiple ? 'true' : null}"
      data-expanded="${isOpen ? 'true' : 'false'}"
    >
      <div class="dropdown-wrapper">
        <label class="label" for="${id}" id="${id}_label"> ${label} </label>
        <div class="dropdown-inner" id="${id}_inner">
          <button
            class="dropdown-trigger"
            id="${id}"
            type="button"
            tabindex="0"
            name="${id}"
            aria-haspopup="listbox"
            aria-expanded="${isOpen ? 'true' : 'false'}"
            aria-controls="${id}_listbox"
            @click="${toggleOptions}"
          >
            <div class="dropdown-option">Selected value</div>
          </button>

          <div
            class="${
              isOpen ? '' : 'hidden'
            } pointer-events-auto !static absolute bottom-[auto] top-[100%] z-[999] max-h-[400px] min-w-[100%] overflow-auto"
            id="${id}_popover"
          >
            <ul id="${id}_listbox" role="listbox">
              ${options.map(
                (option, index) => html`
                  <li
                    class="dropdown-list-item"
                    id="${id}_listitem_${index}"
                    data-value="${option.value ?? option.label}"
                    role="option"
                    aria-selected="false"
                    @click="${(event: Event) => selectOption(event, option)}"
                  >
                    <div class="dropdown-option">${option.label}</div>
                  </li>
                `
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
}

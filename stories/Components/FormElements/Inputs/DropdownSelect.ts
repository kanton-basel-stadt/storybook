import { html } from 'lit'

export const DropdownSelect = (
  label: string,
  id: string,
  isOpen: false,
  canSelectMultiple: false
) => {
  const optionsTemplate = isOpen ? html`
    <div class="!static absolute top-[100%] overflow-auto min-w-[100%] max-h-[400px] z-[999] pointer-events-auto bottom-[auto]" id="${id}_popover">
      <ul id="${id}_listbox" role="listbox">
        <li class="dropdown-list-item" id="${id}_listitem_0">
          <div class="dropdown-option">Value 1</div>
        </li>
        <li class="dropdown-list-item" id="${id}_listitem_1">
          <div class="dropdown-option">Value 2</div>
        </li>
        <li class="dropdown-list-item" id="${id}_listitem_2">
          <div class="dropdown-option">Value 3</div>
        </li>
        <li class="dropdown-list-item" id="${id}_listitem_3">
          <div class="dropdown-option">Value 4</div>
        </li>
      </ul>
    </div>
  ` : html`
    <div class="!static" id="${id}_popover"></div>
  `

  return html`
    <div class="dropdown" data-multiple="${canSelectMultiple ? 'true' : null}" data-expanded="${isOpen ? 'true' : null}">
      <div class="dropdown-wrapper">
        <label class="label" for="${id}" id="${id}_label">
          ${label}
        </label>
        <div class="dropdown-inner" id="${id}_inner">
          <button
            class="dropdown-trigger"
            id="${id}"
            type="button"
            tabindex="0"
            name="personType"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-controls="${id}_listbox"
          >
            <div class="dropdown-option">Selected value</div>
          </button>
          ${optionsTemplate}
        </div>
      </div>
    </div>
  `
}

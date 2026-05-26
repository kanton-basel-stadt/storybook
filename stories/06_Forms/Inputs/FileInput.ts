import { html, nothing } from 'lit'
import type { TemplateResult } from 'lit'
import { ref } from 'lit/directives/ref.js'
import { Icon } from '../../03_Basics/Icon'

export type FileUploadRowState = 'success' | 'active' | 'loading' | 'error'

export type FileUploadRow = {
  id: string
  displayName: string
  sizeLabel: string
  state?: FileUploadRowState
  /** 0–100 when `state` is `loading`. */
  progress?: number
  /** Shown above the row when `state` is `error`. */
  errorMessage?: string
}

export type FileInputOptions = {
  allowedFormatsLine?: string
  maxSizeLine?: string
  dragLine1?: string
  dragLine2?: string
  selectFilesLabel?: string
  multiple?: boolean
  files?: FileUploadRow[]
}

function wireDropZone(root: HTMLElement, inputId: string) {
  const input = root.querySelector<HTMLInputElement>(`#${CSS.escape(inputId)}`)
  const zone = root.querySelector<HTMLElement>('[data-file-dropzone]')
  if (!input || !zone) return

  let dragDepth = 0

  const setDragging = (active: boolean) => {
    if (active) {
      zone.dataset.dragging = 'true'
    } else {
      delete zone.dataset.dragging
    }
  }

  zone.addEventListener('dragenter', (e) => {
    e.preventDefault()
    e.stopPropagation()
    dragDepth++
    setDragging(true)
  })

  zone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    e.stopPropagation()
    dragDepth--
    if (dragDepth <= 0) {
      dragDepth = 0
      setDragging(false)
    }
  })

  zone.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
  })

  zone.addEventListener('drop', (e) => {
    e.preventDefault()
    e.stopPropagation()
    dragDepth = 0
    setDragging(false)
    const files = e.dataTransfer?.files
    if (!files?.length) return
    try {
      const dt = new DataTransfer()
      for (let i = 0; i < files.length; i++) {
        dt.items.add(files[i])
      }
      input.files = dt.files
      input.dispatchEvent(new Event('change', { bubbles: true }))
    } catch {
      /* ignore if browser blocks programmatic assignment */
    }
  })
}

function caretIcon(direction: 'down' | 'up') {
  return Icon('caret', {
    '[&_svg]:w-10': true,
    '[&_svg]:h-6': true,
    '[&_svg]:shrink-0': true,
    '[&_svg]:-scale-y-100': direction === 'up',
  })
}

function removeButton() {
  return html`
    <button
      type="button"
      class="flex h-20 w-20 shrink-0 items-center justify-center text-gray-900"
      aria-label="Datei entfernen"
    >
      ${Icon('close', { '[&_svg]:size-20': true })}
    </button>
  `
}

function fileRowMain(
  row: FileUploadRow,
  variant: 'default' | 'activeHeader'
): TemplateResult {
  const activeHeader = variant === 'activeHeader'
  const categoryLabelClass = activeHeader
    ? 'min-w-0 flex-1 text-left md:text-right text-base font-medium leading-snug text-gray-900'
    : 'shrink-0 whitespace-nowrap text-left md:text-right text-base font-medium leading-snug text-gray-900'

  return html`
    <div class="flex flex-col gap-8 text-left md:hidden">
      <div class="flex items-center gap-[4px]">
        <p
          class="min-w-0 flex-1 text-left text-base font-medium leading-snug text-gray-900"
        >
          ${row.displayName}
        </p>
        ${removeButton()}
      </div>
      <p class="text-left text-base font-medium leading-snug text-gray-900">
        ${row.sizeLabel}
      </p>
      <div class="flex w-full items-center justify-start gap-[4px]">
        <span class="${categoryLabelClass}">Dateikategorie</span>
        ${caretIcon(activeHeader ? 'up' : 'down')}
      </div>
    </div>
    <div class="hidden w-full min-w-0 items-center gap-[4px] text-left md:flex">
      <p
        class="min-w-0 flex-1 text-left text-base font-medium leading-snug text-gray-900"
      >
        ${row.displayName}
      </p>
      <div
        class="${activeHeader
          ? 'ml-20'
          : ''} flex w-[200px] shrink-0 items-center justify-end gap-[4px]"
      >
        <span class=${categoryLabelClass}>Dateikategorie</span>
        ${caretIcon(activeHeader ? 'up' : 'down')}
      </div>
      <p
        class="w-[80px] shrink-0 text-right text-base font-medium leading-snug text-gray-900"
      >
        ${row.sizeLabel}
      </p>
      ${removeButton()}
    </div>
  `
}

function fileRow(row: FileUploadRow, rootId: string): TemplateResult {
  const state = row.state ?? 'success'
  const errorId = `${rootId}-file-${row.id}-error`
  const pct = 10

  if (state === 'success') {
    return html`
      <div
        class="w-full rounded-[2px] border border-green-600 bg-green-100 px-8 py-10 text-left"
      >
        ${fileRowMain(row, 'default')}
      </div>
    `
  }

  if (state === 'active') {
    return html`
      <div
        class="w-full rounded bg-purple-100 p-[4px] text-left shadow-[0_0_16px_0_#d7bdea]"
      >
        <div
          class="flex flex-col gap-20 rounded-[2px] border border-purple-600 bg-purple-200 px-8 py-10 text-left"
        >
          ${fileRowMain(row, 'activeHeader')}
        </div>
        <div class="flex w-full flex-col gap-8 px-2 pb-8 pt-20 text-left">
          <p class="text-base font-medium text-gray-700">Dateikategorie</p>
          <div
            class="flex h-40 w-full items-center gap-[4px] rounded border border-blue-900 bg-white pl-8 pr-10 text-left"
          >
            <span
              class="min-w-0 flex-1 text-left text-base font-medium text-gray-700"
            >
              Bitte auswählen
            </span>
            ${caretIcon('down')}
          </div>
        </div>
      </div>
    `
  }

  if (state === 'loading') {
    return html`
      <div
        class="relative w-full overflow-hidden rounded-[2px] border border-blue-500 bg-blue-50 px-8 py-10 text-left"
        role="status"
        aria-busy="true"
      >
        <div
          class="pointer-events-none absolute bottom-0 left-0 top-0 z-0 bg-blue-300 mix-blend-darken"
          style=${`width: ${pct}%;`}
        ></div>
        <div class="relative z-[1] w-full text-left">
          ${fileRowMain(row, 'default')}
        </div>
      </div>
    `
  }

  return html`
    <div class="flex w-full flex-col gap-8">
      <div class="flex h-[18px] items-start gap-10 px-[2px]">
        <p
          id=${errorId}
          class="min-w-0 flex-1 text-right text-xs font-medium leading-[18px] text-red-800"
        >
          ${row.errorMessage ?? 'Ungültiges Dateiformat'}
        </p>
      </div>
      <div
        class="w-full rounded-[2px] border border-red-300 bg-white px-8 py-10 text-left"
      >
        ${fileRowMain(row, 'default')}
      </div>
    </div>
  `
}

export const FileInput = (
  label: string,
  name: string,
  id: string,
  description: string,
  accept: string,
  options: FileInputOptions = {}
) => {
  const labelId = `${id}-legend`
  const statusId = `${id}-status`
  const descId = `${id}-desc`

  const allowedFormatsLine =
    options.allowedFormatsLine ?? 'Erlaubte Formate: XXYY, XYZ, YXX'
  const maxSizeLine =
    options.maxSizeLine ?? 'Erlaubte Grösse: bis XX MB pro File'
  const dragLine1 =
    options.dragLine1 ??
    'Ziehen Sie die Datei an diese Stelle, um sie hochzuladen oder benutzen Sie Ihren '
  const dragLine2 = options.dragLine2 ?? 'Datei-Manger.'
  const selectFilesLabel = options.selectFilesLabel ?? 'Dateien auswählen'
  const multiple = options.multiple ?? true
  const files = options.files ?? []

  const onChange = (e: Event) => {
    const input = e.target as HTMLInputElement
    const status = document.getElementById(statusId)
    if (!status) return
    const names = input.files?.length
      ? Array.from(input.files)
          .map((f) => f.name)
          .join(', ')
      : ''
    status.textContent = names
  }

  const describedBy = [description ? descId : null, statusId]
    .filter(Boolean)
    .join(' ')

  const acceptAttr = accept.trim() ? accept : undefined

  return html`
    <div
      class="w-full max-w-[880px]"
      ${ref((el) => {
        if (el instanceof HTMLElement) {
          if (el.dataset.fileDropzoneWired === 'true') return
          el.dataset.fileDropzoneWired = 'true'
          queueMicrotask(() => wireDropZone(el, id))
        }
      })}
    >
      ${label
        ? html`<div class="label" id="${labelId}">${label}</div>`
        : nothing}
      <div class="relative">
        <input
          type="file"
          name="${name}"
          id="${id}"
          class="sr-only"
          accept=${acceptAttr ?? nothing}
          ?multiple=${multiple}
          aria-labelledby=${label ? labelId : nothing}
          aria-describedby=${describedBy || nothing}
          @change=${onChange}
        />
        <div
          data-file-dropzone
          class="flex w-full cursor-pointer flex-col gap-20 rounded border border-dashed border-green-700 bg-green-50 p-20 text-left transition-all duration-250 ease-in-out hover:border-blue-500 hover:bg-blue-50"
        >
          <div class="flex flex-col items-center justify-center space-y-20">
            ${Icon('cloud-upload', {
              '[&_svg]:size-[56px]': true,
              'text-green-700': true,
            })}
            <div
              class="max-w-[344px] text-base font-bold leading-snug text-green-700"
            >
              <p>${dragLine1}</p>
              <p>${dragLine2}</p>
            </div>
            <div
              class="max-w-[344px] text-base font-medium leading-snug text-gray-700"
            >
              <p>${allowedFormatsLine}</p>
              <p>${maxSizeLine}</p>
            </div>
            <label
              for="${id}"
              class="max-w-full inline-flex w-fit cursor-pointer items-center gap-8 rounded-[30px] border border-solid border-blue-900 bg-[#f8f8f8] py-10 pl-10 pr-20 text-base font-medium leading-snug text-blue-900"
            >
              ${Icon('upload', {
                '[&_svg]:size-20': true,
                'text-blue-900': true,
              })}
              ${selectFilesLabel}
            </label>
          </div>

          ${files.map((row) => fileRow(row, id))}
        </div>
      </div>
      ${description
        ? html`<p class="mt-10 px-2 text-sm text-gray-700" id="${descId}">
            ${description}
          </p>`
        : nothing}
      <p class="sr-only" id="${statusId}" aria-live="polite"></p>
    </div>
  `
}

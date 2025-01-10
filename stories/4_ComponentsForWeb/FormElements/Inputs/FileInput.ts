import { html } from 'lit'

export const FileInput = () => {
  return html`
    <div class="w-[250px]">
      <button
        class="flex w-[250px] cursor-pointer flex-col items-center gap-10 rounded border border-dashed border-gray-300 bg-white p-20 transition-all duration-250 ease-in-out hover:border-blue-500 hover:bg-blue-50"
      >
        Datei hier droppen oder <span class="inline-link">Datei auswählen</span>
      </button>
      <input type="file" hidden />
    </div>
  `
}

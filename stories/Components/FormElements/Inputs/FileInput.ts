import { html } from 'lit'

export const FileInput = () => {
  return html`
    <div class="w-[250px]">
      <button class="w-[250px] p-20 border border-dashed border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-500 transition-all ease-in-out duration-250 rounded cursor-pointer flex flex-col gap-10 items-center">
        Datei hier droppen oder <span class="inline-link">Datei auswählen</span>
      </button>
      <input type="file" hidden />
    </div>
  `
}

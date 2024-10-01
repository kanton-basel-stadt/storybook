import { html } from 'lit'

export const Slider = (
  label: string,
  name: string,
  id: string,
) => {
  return html`
    <div>
      <label class="label font-bold" id="${id}_label">
        ${label}
      </label>
      <div class="flex gap-10" data-has-mark-labels="true">
        <div class="w-full" id="track-input_18">
          <div class="slider-track-wrapper">
            <div class="slider-track">
              <div class="slider-fill" style="left: 0%; width: 40%;"></div>
              <div class="slider-marks-container">
                <span data-active="true" class="formkit-mark slider-mark" style="left: 0%;">0</span>
                <span data-active="true" class="formkit-mark slider-mark" style="left: 10%;">10</span>
                <span data-active="true" class="formkit-mark slider-mark" style="left: 20%;">20</span>
                <span data-active="true" class="formkit-mark slider-mark" style="left: 30%;">30</span>
                <span data-active="true" class="formkit-mark slider-mark" style="left: 40%;">40</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 50%;">50</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 60%;">60</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 70%;">70</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 80%;">80</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 90%;">90</span>
                <span data-active="false" class="formkit-mark slider-mark" style="left: 100%;">100</span>
              </div>
              <ul>
                <li class="slider-handle" tabindex="0" style="left: 40%;">
                  <div />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[80px]">
          <div class="flex flex-row">
            <input min="0" max="100" step="5" class="input w-full my-10" type="number" name="${name}_number" id="${id}_number" value="40" />
          </div>
        </div>
      </div>
    </div>
  `
}

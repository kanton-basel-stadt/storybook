import { html } from 'lit'

export const StepperNav = () => {
  return html`
    <div class="stepper-nav container !px-60" role="tablist">
      <button class="step-tab" type="button" data-active="true" role="tab" id="step_tab_1" aria-selected="true" tabindex="0">
        <span class="step-tab-label">Step 1</span>
      </button>
      <button class="step-tab" type="button" data-active="false" role="tab" id="step_tab_2" aria-selected="false" tabindex="-1">
        <span class="step-tab-label">Step 2</span>
      </button>
      <button class="step-tab" type="button" data-active="false" role="tab" id="step_tab_3" aria-selected="false" tabindex="-1">
        <span class="step-tab-label">Step 3</span>
      </button>
      <button class="step-tab" type="button" data-active="false" role="tab" id="step_tab_4" aria-selected="false" tabindex="-1">
        <span class="step-tab-label">Step 4</span>
      </button>
    </div>
  `
}

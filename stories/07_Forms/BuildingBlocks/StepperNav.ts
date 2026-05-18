import { html } from 'lit'

export const StepperNav = (numberOfSteps: number, activeStep: number) => {
  return html`
    <div class="stepper-nav container !px-60" role="tablist">
      ${Array.from({ length: numberOfSteps }, (_, i) => i + 1).map(
        (n) => html`
          <button
            class="step-tab"
            type="button"
            data-active="${activeStep === n ? 'true' : 'false'}"
            role="tab"
            id="step_tab_${n}"
            aria-selected="true"
            tabindex="0"
          >
            <span class="step-tab-label">Step ${n}</span>
          </button>
        `
      )}
    </div>
  `
}

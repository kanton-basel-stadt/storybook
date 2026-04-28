import { TestRunnerConfig } from '@storybook/test-runner'
import { injectAxe, checkA11y } from 'axe-playwright'
import { HtmlValidate, Report } from 'html-validate'

const validator = new HtmlValidate({
  rules: {
    'attribute-boolean-style': ['error', { style: 'empty' }],
  },
})

export function validateHtml(html: string, storyId: string) {
  const report: Report = validator.validateStringSync(html)

  if (!report.valid) {
    const errors = []

    report.results.forEach((result) => {
      result.messages.forEach((message) => {
        errors.push({
          Message: message.message,
          'Rule ID': message.ruleId,
          Selector: message.selector,
        })
      })
    })

    console.table(errors)

    throw new Error(`HTML validation failed for story: ${storyId}`)
  }
}

const config: TestRunnerConfig = {
  async preVisit(page, context) {
    await injectAxe(page)

    const innerHtml = await (await page.locator('#storybook-root')).innerHTML()

    validateHtml(innerHtml, context.id)
  },
  async postVisit(page, context) {
    if (context.id === '3-tailwind-tools-contrast-checker--default') {
      return // Do not check the contrast checker for a11y, that's what it's for.
    }

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      verbose: false,
      detailedReportOptions: {
        html: true,
      },
    })
  },
}

export default config

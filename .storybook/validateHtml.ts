import { HtmlValidate, type Report } from 'html-validate'

const validator = new HtmlValidate({
  rules: {
    'attribute-boolean-style': ['error', { style: 'empty' }],
  },
})

export function validateHtml(html: string, storyId: string) {
  const report: Report = validator.validateStringSync(html)

  if (!report.valid) {
    const errors: Array<{
      Message: string
      'Rule ID': string
      Selector: string | null
    }> = []

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

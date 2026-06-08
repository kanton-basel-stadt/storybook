import { html } from 'lit'
import { classMap } from 'lit-html/directives/class-map.js'

export const SuperButton = (
  label: string,
  decorator: 'Link' | 'Prev' | 'Next' | 'Close' | 'Add' | 'Reload' | 'Check',
  variant: 'Standard' | 'Strong' | 'Feedback' | 'Success' | 'Failure'
) => {
  const classes = {
    button: true,
    'is-super': true,
    'is-strong': variant.includes('Strong'),
    'is-feedback': variant.includes('Feedback'),
    'is-prev': decorator.includes('Prev'),
    'is-next': decorator.includes('Next'),
    'is-close': decorator.includes('Close'),
    'is-add': decorator.includes('Add'),
    'is-reload': decorator.includes('Reload'),
    'is-check': decorator.includes('Check'),
    'is-link': decorator.includes('Link'),
    'is-success': variant.includes('Success'),
    'is-failure': variant.includes('Failure'),
  }

  return html` <button class="${classMap(classes)}">${label}</button> `
}

import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import type { ClassInfo } from 'lit-html/directives/class-map'

import '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import IconsIndex from '@kanton-basel-stadt/designsystem/dist/configs/icons-index'
import toClassString from '../../../helpers/toClassString'

export type IconName = typeof IconsIndex.iconNames[number]

export const Icon = (iconName: IconName, classes?: ClassInfo) => {
  let template = `<icon-symbol-${iconName} aria-hidden="true"`

  if (classes) {
    template += ` class="${toClassString(classes)}"`
  }

  template += ' />'

  return html`
    ${unsafeHTML(template)}
  `
}

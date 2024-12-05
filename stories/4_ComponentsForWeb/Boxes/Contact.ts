import { html } from 'lit'

export const Contact = (name: string, description: string, phoneNumber: string, emailAddress: string, additionalInfo: string) => {
  return html`
  <div class="container paragraph--margin not-first:mt-30">
    <h3 class="font-bold">${name}</h3>
    <div>${description}</div>
    ${phoneNumber.length > 0 || emailAddress.length > 0 ? html`
      <div class="flex gap-10 mt-15">
        <a href="tel:${phoneNumber.replace(/\s+/g, '-')}" class="button is-action is-link">${phoneNumber}</a>
        <a href="mailto:${emailAddress}" class="button is-action is-link">${emailAddress}</a>
      </div>
    ` : ''}

    ${additionalInfo.length > 0 ? html`
      <div class="mt-15">
        ${additionalInfo}
      </div>
    ` : ''}
  </div>
  `
}

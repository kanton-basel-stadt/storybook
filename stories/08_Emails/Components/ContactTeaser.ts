import { html } from 'lit'
import { Text } from './Text'
import { Image } from './Image'
import { Button } from './Button'

export const ContactTeaser = (
  mapImageUrl: string,
  addressTitle: string,
  addressLine1: string,
  addressLine2: string,
  email: string,
  phone: string,
  linkUrl: string,
  linkLabel: string
) => {
  return html`
    <div>
      ${Text(
        'Kontakt',
        true,
        true,
        'large',
        '16px 0',
        '20px',
        '20px',
        '0',
        '15px'
      )}
      ${Image(mapImageUrl, null, '16px', '16px', '16px', '0', '0')}
      ${addressTitle && addressTitle.length > 0
        ? Text(
            addressTitle,
            true,
            false,
            'medium',
            '4px',
            '20px',
            '20px',
            '4px',
            '5px'
          )
        : ''}
      ${addressLine1 && addressLine1.length > 0
        ? Text(
            addressLine1,
            false,
            false,
            'medium',
            '4px',
            '20px',
            '20px',
            '4px',
            '0'
          )
        : ''}
      ${addressLine2 && addressLine2.length > 0
        ? Text(
            addressLine2,
            false,
            false,
            'medium',
            '4px',
            '20px',
            '20px',
            '4px',
            '30px'
          )
        : ''}
      ${email && email.length > 0
        ? Button(
            'secondary',
            email,
            `mailto:${email}`,
            'https://www.bs.ch/images/email/button-secondary-email.png',
            '4px',
            '16px',
            '16px',
            '4px',
            '16px'
          )
        : ''}
      ${phone && phone.length > 0
        ? Button(
            'secondary',
            phone,
            `tel:${phone}`,
            'https://www.bs.ch/images/email/button-secondary-phone.png',
            '4px',
            '16px',
            '16px',
            '4px',
            '16px'
          )
        : ''}
      ${linkUrl && linkUrl.length > 0
        ? Button(
            'secondary',
            linkLabel,
            linkUrl,
            'https://www.bs.ch/images/email/button-secondary-arrow-right.png',
            '4px',
            '16px',
            '16px',
            '4px',
            '16px'
          )
        : ''}
    </div>
  `
}

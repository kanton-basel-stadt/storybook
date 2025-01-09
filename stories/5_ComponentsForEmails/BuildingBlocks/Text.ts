import { html } from 'lit'

// prettier-ignore
export const Text = (text: string, isBold: boolean, isGreen: boolean, isSmall: boolean) => html`
  <div><!--[--><!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]--><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;" data-mjml-tag="mj-section"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-left:16px;padding-right:16px;padding-top:30px;text-align:left;"><!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <![endif]--><!--[if mso | IE]>
        <tr>
      <![endif]--><!--[--><!--[--><!--[--><!--[if mso | IE]>
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" data-mjml-tag="mj-column"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%"><tbody><!--[--><!--[--><tr data-mjml-tag="mj-text"><td align="left" style="font-size:0px;padding:0;word-break:break-word;"><div style="font-family:'Inter', Helvetica, Arial, sans-serif !important;;font-size:${isSmall ? 14 : 16}px;font-weight:${isBold ? 700 : 400};line-height:${isSmall ? 20 : 22}px;text-align:left;color:${isGreen ? '#2A9749' : '#000000'};"><!--[--><!--[if mso | IE]><span style="font-family: Helvetica, Arial, sans-serif, 'Inter' !important"><![endif]--><!--[--><span><p>${text}</p></span><!--]--><!--[if mso | IE]></span><![endif]--><!--]--></div></td></tr><!--]--><!--]--></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
            </td>
          <![endif]--><!--]--><!--]--><!--]--><!--[if mso | IE]>
        </tr>
      <![endif]--><!--[if mso | IE]>
                  </table>
                <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]--><!--]--></div>
`

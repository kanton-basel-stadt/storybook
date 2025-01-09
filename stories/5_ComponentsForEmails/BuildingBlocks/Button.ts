import { html } from 'lit'

export const Button = (
  type: 'primary' | 'secondary',
  label: string,
  url: string,
  iconPath: string
) => {
  if (type === 'primary') {
    // prettier-ignore
    return html`
      <div><!--[--><!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"
             data-mjml-tag="mj-section">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                 style="background:#ffffff;background-color:#ffffff;width:100%;">
            <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-left:16px;padding-right:16px;padding-top:30px;text-align:left;"><!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <![endif]--><!--[if mso | IE]>
        <tr>
      <![endif]--><!--[--><!--[--><!--[--><!--[if mso | IE]>
            <td
               align="center" class="" style=""
            >
          <![endif]--><!--[if mso | IE]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${ url }" style="height:41px;v-text-anchor:middle;width:200px;" arcsize="50%" strokecolor="#1E4557" fill="t">6
        <v:fill type="tile" color="#1E4557" />
        <w:anchorlock/>
        <center style="color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:700;">
    <![endif]--><!--[if !mso]><!-->
                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                       style="border-collapse:separate;line-height:100%;" data-mjml-tag="mj-button">
                  <tbody>
                  <tr>
                    <td align="center" bgcolor="#1E4557" role="presentation"
                        style="border:1px solid #1E4557;border-radius:21px;cursor:auto;mso-padding-alt:9px 20px 9px 20px;text-align:left;background:#1E4557;"
                        valign="middle"><a href="${ url }"
                                           style="display:inline-block;background:#1E4557;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:700;line-height:21px;margin:0;text-decoration:none;text-transform:none;padding:9px 20px 9px 20px;mso-padding-alt:0px;border-radius:21px;"
                                           target="_blank"><!--<![endif]--><!--[--><!--[-->

                      <table>
                        <tbody>
                        <tr>
                          ${iconPath && iconPath.length > 0 ? html`
                            <td valign="middle" style="padding-right:8px;"><!--[-->
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" data-mjml-tag="mj-image">
                                <tbody>
                                <tr>
                                  <td style="width:20px;">
                                    <img height="20" src="${iconPath}" style="border:0;display:block;outline:none;text-decoration:none;height:20px;width:100%;font-size:13px;" width="20">
                                  </td>
                                </tr>
                                </tbody>
                              </table><!--]-->
                            </td>
                          ` : ''}
                          <td valign="middle" style="color:#ffffff;">
                            ${label}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <!--]--><!--]-->
                      <!--[if !mso]><!--></a></td>
                  </tr>
                  </tbody>
                </table><!--<![endif]--><!--[if mso | IE]>
        </center>
      </v:roundrect>
    <![endif]--><!--[if mso | IE]>
            </td>
          <![endif]--><!--]--><!--]--><!--]--><!--[if mso | IE]>
        </tr>
      <![endif]--><!--[if mso | IE]>
                  </table>
                <![endif]--></td>
            </tr>
            </tbody>
          </table>
        </div><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]--><!--]--></div>
    `
  }

  return html`
    <div>
      <!--[--><!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"
        data-mjml-tag="mj-section"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#ffffff;background-color:#ffffff;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-left:16px;padding-right:16px;padding-top:30px;text-align:left;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <!
                [endif]-->[endif]--><!--[if mso | IE]>
        <tr>
      <!
                [endif]--><!--[--><!--[--><!--[--><!--[if mso | IE]>
            <td
               align="center" class="" style=""
            >
          <!
                [endif]-->[endif]--><!--[if mso | IE]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:42px;v-text-anchor:middle;width:200px;" arcsize="50%" strokecolor="#1E4557" fill="t">6
        <v:fill type="tile" color="#F8F8F8" />
        <w:anchorlock/>
        <center style="color:#1E4557;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:700;">
    <!
                [endif]--><!--[if !mso]><!-->
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="border-collapse:separate;line-height:100%;"
                  data-mjml-tag="mj-button"
                >
                  <tbody>
                    <tr>
                      <td
                        align="center"
                        bgcolor="#F8F8F8"
                        role="presentation"
                        style="border:1px solid #1E4557;border-radius:21px;cursor:auto;mso-padding-alt:4px 20px 4px 20px;text-align:left;background:#F8F8F8;"
                        valign="middle"
                      >
                        <a
                          href="${url}"
                          style="display:inline-block;background:#F8F8F8;color:#1E4557;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:700;line-height:32px;margin:0;text-decoration:none;text-transform:none;padding:4px 20px 4px 20px;mso-padding-alt:0px;border-radius:21px;"
                          target="_blank"
                          ><!--<!
                          [endif]--><!--[--><!--[-->
                          <table>
                            <tbody>
                              <tr>
                                ${iconPath && iconPath.length > 0
                                  ? html`
                                      <td
                                        valign="middle"
                                        style="padding-right:8px;"
                                      >
                                        <!--[-->
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="border-collapse:collapse;border-spacing:0px;"
                                          data-mjml-tag="mj-image"
                                        >
                                          <tbody>
                                            <tr>
                                              <td style="width:20px;">
                                                <img
                                                  height="20"
                                                  src="${iconPath}"
                                                  style="border:0;display:block;outline:none;text-decoration:none;height:20px;width:100%;font-size:13px;"
                                                  width="20"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--]-->
                                      </td>
                                    `
                                  : ''}
                                <td valign="middle">${label}</td>
                              </tr>
                            </tbody>
                          </table>
                          <!--]--><!--]--><!--[if !mso
                        ]><!--></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--<![endif]-->[endif]--><!--[if mso | IE]>
        </center>
      </v:roundrect>
    <!
                [endif]-->[endif]--><!--[if mso | IE]>
            </td>
          <!
                [endif]--><!--]--><!--]--><!--]--><!--[if mso | IE]>
        </tr>
      <!
                [endif]-->[endif]--><!--[if mso | IE]>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <!
      [endif]--><!--]-->
    </div>
  `
}

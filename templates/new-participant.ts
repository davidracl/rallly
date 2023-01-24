const template = `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings
            xmlns:o="urn:schemas-microsoft-com:office:office"
          >
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,
        th,
        div,
        p,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Segoe UI", sans-serif;
          mso-line-height-rule: exactly;
        }
      </style>
    <![endif]-->
      <title>Your poll has a new participant</title>
      <style>
.hover-bg-indigo-400:hover {
  background-color: #818cf8 !important;
}
.hover-underline:hover {
  text-decoration: underline !important;
}
.hover-no-underline:hover {
  text-decoration: none !important;
}
@media (max-width: 600px) {
  .sm-w-full {
    width: 100% !important;
  }
  .sm-py-32 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .sm-px-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
</style>
  </head>
  <body style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
      <div style="display: none;">
        Go to your poll to see how they voted&#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
        &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
        &#160;&#847; &#847; &#847; &#847; &#847;
      </div>
    <div role="article" aria-roledescription="email" aria-label="Your poll has a new participant" lang="en">
    <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="background-color: #f3f4f6;">
          <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="height: 48px;"></td>
            </tr>
            <tr>
              <td align="center" class="sm-px-24">
                <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="sm-px-24" style="border-radius: 4px; background-color: #ffffff; padding: 36px; text-align: left; font-size: 16px; line-height: 24px; color: #1f2937;">
                      <p style="margin-bottom: 8px;">Hi <%= it.name %>,</p>
                      <p style="margin-bottom: 8px;">
                        <strong><%= it.participantName %></strong> has voted on
                        your&nbsp;poll.
                      </p>
                      <p style="margin-bottom: 24px;"></p>
                      <div style="margin-bottom: 24px; line-height: 100%;">
                        <a href="<%= it.pollUrl %>" class="hover-bg-indigo-400" style="display: inline-block; border-radius: 4px; background-color: #6366f1; padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 24px; text-align: center; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none;"> <!--[if mso]><i style="letter-spacing: 27px; mso-font-width: -100%; mso-text-raise: 26pt;">&nbsp;</i><![endif]-->
                          <span style="mso-text-raise: 16px">Go to poll &rarr;
                          </span> <!--[if mso]><i style="letter-spacing: 27px; mso-font-width: -100%;">&nbsp;</i><![endif]-->
                        </a>
                      </div>
                      <p>
                        <a href="<%= it.unsubscribeUrl %>" class="hover-no-underline" style="color: #6366f1; text-decoration: underline;">Stop receiving notifications for this poll.</a>
                      </p>
                      <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-top: 32px; padding-bottom: 32px;">
                            <div style="height: 1px; background-color: #e5e7eb; line-height: 1px;">
                              &zwnj;
                            </div>
                          </td>
                        </tr>
                      </table>
                      <p>
                        Not sure why you received this email? Please
                        <a href="mailto:<%= it.supportEmail %>" class="hover-no-underline" style="color: #6366f1; text-decoration: underline;">let us know</a>.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 48px;"></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </div>
  </body>
</html>`;

export default template;

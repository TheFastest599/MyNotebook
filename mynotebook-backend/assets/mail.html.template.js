// an email template that can be used with Nodemailer to send emails
require('dotenv').config();

const HTML_TEMPLATE = (title, message, dateTimeLocalString) => {
  const dateTime = dateTimeLocalString
    ? `<p style="line-height: 140%">Set for ${dateTimeLocalString}</p>`
    : '';
  const client = process.env.CLIENT_URL;
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <title></title>
  
      <style type="text/css">
        /* In your CSS file or style block */
        @media (prefers-color-scheme: dark) {
          body {
            color-scheme: light;
          }
        }
        /* CONFIG STYLES Please do not delete and edit CSS styles below */      
        @media only screen and (min-width: 490px) {
          .u-row {
            width: 470px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
  
          .u-row .u-col-33p33 {
            width: 156.65099999999998px !important;
          }
  
          .u-row .u-col-66p67 {
            width: 313.349px !important;
          }
  
          .u-row .u-col-100 {
            width: 470px !important;
          }
        }
  
        @media (max-width: 490px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
  
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
  
        p {
          margin: 0;
        }
  
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
  
        * {
          line-height: inherit;
        }
  
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
  
        table,
        td {
          color: #000000;
        }
        #u_body a {
          color: #0000ee;
          text-decoration: none;
        }
        #u_content_text_3 a {
          color: #ffffff;
        }
        @media (max-width: 480px) {
          #u_content_text_1 .v-font-size {
            font-size: 15px !important;
          }
        }
      </style>
  
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <!--<![endif]-->
    </head>
  
    <body
      class="clean-body u_body"
      style="
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #fff600;
        color: #000000;
      "
    >
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table
        id="u_body"
        style="
          border-collapse: collapse;
          table-layout: fixed;
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          vertical-align: top;
          min-width: 320px;
          margin: 0 auto;
          background-color: #fff600;
          width: 100%;
        "
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <td
              style="
                display: none !important;
                visibility: hidden;
                mso-hide: all;
                font-size: 1px;
                color: #ffffff;
                line-height: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
              "
            >
            </td>
          </tr>
  
          <tr style="vertical-align: top">
            <td
              style="
                word-break: break-word;
                border-collapse: collapse !important;
                vertical-align: top;
              "
            >
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #fff600;"><![endif]-->
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 470px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:470px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="470" style="width: 470px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 470px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                  <h1
                                    class="v-font-size"
                                    style="
                                      margin: 0px;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                      font-family: impact, chicago;
                                      font-size: 22px;
                                      font-weight: 400;
                                    "
                                  >
                                    <span
                                      ><span><span>${title}</span></span></span
                                    >
                                  </h1>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            id="u_content_text_1"
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    class="v-font-size"
                                    style="
                                      font-family: 'Source Sans Pro', sans-serif;
                                      font-size: 18px;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="line-height: 140%">${message}<br/></p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    class="v-font-size"
                                    style="
                                      font-family: courier new, courier;
                                      font-size: 12px;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    ${dateTime}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 470px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:470px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="156" style="background-color: #34495e;width: 156px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-33p33"
                      style="
                        max-width: 320px;
                        min-width: 156.67px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #34495e;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                  <h3
                                    class="v-font-size"
                                    style="
                                      margin: 0px;
                                      color: #ffffff;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                      font-family: Fredoka One;
                                      font-size: 18px;
                                      font-weight: 400;
                                    "
                                  >
                                    <span><a
                                    href=${client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style="
                                      text-decoration: none;
                                      color: white;
                                    "
                                    >MyNotebook</a
                                  ></span>
                                  </h3>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="313" style="background-color: #34495e;width: 313px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-66p67"
                      style="
                        max-width: 320px;
                        min-width: 313.33px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #34495e;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                  <h4
                                    class="v-font-size"
                                    style="
                                      margin: 0px;
                                      color: #ffffff;
                                      line-height: 140%;
                                      text-align: right;
                                      word-wrap: break-word;
                                      font-family: andale mono, times;
                                      font-size: 13px;
                                      font-weight: 400;
                                    "
                                  >
                                    <span>Made by- Anirban Saha</span>
                                  </h4>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 1px solid #bbbbbb;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            id="u_content_text_3"
                            style="font-family: arial, helvetica, sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: arial, helvetica, sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    class="v-font-size"
                                    style="
                                      font-size: 14px;
                                      color: #ffffff;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="line-height: 140%">
                                      <a
                                        rel="noopener"
                                        href="https://www.linkedin.com/in/anirban-saha-245640256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        target="_blank"
                                        >Linkdin</a
                                      >         
                                      <a
                                        rel="noopener"
                                        href="https://github.com/TheFastest599"
                                        target="_blank"
                                        >Github</a
                                      >           <a
                                        rel="noopener"
                                        href="mailto:ribhusaha2003@gmail.com"
                                        target="_blank"
                                        >Email</a
                                      >     
                                      <a
                                        rel="noopener"
                                        href="https://www.instagram.com/anirban_saha_t?igsh=NGVhN2U2NjQ0Yg=="
                                        target="_blank"
                                        > Instagram</a
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
  </html>
  `;
};

module.exports = HTML_TEMPLATE;

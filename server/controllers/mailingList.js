const mailingListModel = require('../models/mailingList')
const sendMailInter = require('../controllers/sentMail-Inter')

const addToMailingList = async (email) => {
  // console.log("Email here", email);
  try {
    let tempEmail = email;
    await mailingListModel.findOne({ email:tempEmail},(err,response)=>{
      if(!response)
      {
        const newMail = new mailingListModel({email: tempEmail});
        newMail.save().then(function(err){
          console.log(err);
        });
        console.log("Saved Email");
      }

      const mailBody = {
        "Destination": {
          "ToAddresses": [email]
        },
  
        "Message": {
          "Body": {
            "Html": {
              "Charset": "UTF-8",
              "Data":
                ` 
                <!doctype html>
  <html lang="en-US">
  
  <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>Added to mailing list</title>
      <meta name="description" content="Reset Password Email Template.">
      <style type="text/css">
          a:hover {text-decoration: underline !important;}
      </style>
  </head>
  
  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
      <!--100% body table-->
      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
          style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
          <tr>
              <td>
                  <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                      align="center" cellpadding="0" cellspacing="0">
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                      
                      <tr>
                          <td>
                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                  style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                  <tr>
                                      <td style="height:40px;">&nbsp;</td>
                                  </tr>
                                  <tr>
                          <td style="text-align:center;">
                            <a href="http://www.alumni.wce.ac.in" title="logo" target="_blank">
                              <img width="80" src="https://wce-connects-img.s3.ap-south-1.amazonaws.com/wce75.png" title="logo" alt="logo">
                            </a>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                                  <tr>
                                      <td style="padding:0 35px;">
                                          <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You are now connected!!!</h1>
                                          <span
                                              style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                            Dear Alumni, You are now connected with WCE-Connects and will recieve future updates, newsletters etc.
                                          </p>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:10;">For any queries reach us at webmaster@walchandsangli.ac.in
                                          <br>
                                          <br>
                                          Thanks & Regards,
                                          <br>
                                          WCE, Sangli 416415
                                        </p>
                                      </td>
                                  </tr>
                                  
                                  <tr>
                                    <td>
                                    <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>Developed by Department of Computer Science and Engineering</strong></p>
                                    </td>
                                  </tr>
                                  <tr>
                                      <td style="height:40px;">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.alumni.wce.ac.in</strong></p>                            
                          </td>
                      </tr>
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <!--/100% body table-->
  </body>
  
  </html>
              `
            },
            "Text": {
              "Charset": "UTF-8",
              "Data": "This is system generated email."
            }
          },
          "Subject": {
            "Charset": "UTF-8",
            "Data": `Connected with WCE, Sangli! `
          }
        }
      }
  
      // req.mailBody = mailBody;
      sendMailInter.emailViaAWS_SES(mailBody)
      console.log("Mail sent to ", email);
  
    });
  } 
  catch (error) {
    console.log(error);
  }
}

module.exports = {addToMailingList};
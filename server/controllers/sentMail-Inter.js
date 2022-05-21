const AWS = require("aws-sdk");
const config = require('config');
require('dotenv').config();

exports.emailViaAWS_SES = function (mailBody) {
  return new Promise(async (resolve, reject) => {
    try {
      AWS.config.update({
        accessKeyId: config.AWS.accessKeyId,
        secretAccessKey: config.AWS.secretAccessKey,
        region: config.AWS.region
      });

      const ses = new AWS.SES({ apiVersion: "2010-12-01" });

      // console.log("MailBody here", mailBody);

      const params = {
        ...mailBody,
        Source: "'WCE-Connects' <" + config.AWS.SenderEmailId + ">'"
      };

      const sendEmailReceiver = ses.sendEmail(params).promise();

      sendEmailReceiver
        .then(data => {
          console.log("email submitted to SES", data);
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          reject(error)
          // res.status(404).send({
          //   message: 'Failed to send !'
          // })
        });

      // resolve("done")
    } catch (err) {
      console.log(err);
      reject(err);
    }
  })

}
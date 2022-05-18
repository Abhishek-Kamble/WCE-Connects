const mongoose = require('mongoose')
const mailingListModel = require('../models/mailingList')

const addToMailingList = async (email) => {
  console.log("Email here", email);
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
    });
  } 
  catch (error) {
    console.log(error);
  }
}

module.exports = {addToMailingList};
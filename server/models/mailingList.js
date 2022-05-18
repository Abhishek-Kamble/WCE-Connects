const mongoose = require('mongoose');

const mailingListSchema = mongoose.Schema({
  email: {type: String, required: true}
});

const mailingListModel = mongoose.model("MailingList", mailingListSchema);

module.exports =  mailingListModel;
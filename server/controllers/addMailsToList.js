const { addToMailingList } = require("./mailingList");
const {createUserAccAdmin} = require('./userLogin');

const addMailsToList = (data) =>{
  const records = data;
  console.log("records", records);
  records.forEach((res, index) => {
    addToMailingList(records[index].email);
    createUserAccAdmin(data)
  });

  console.log("All done");
}

module.exports = addMailsToList; 
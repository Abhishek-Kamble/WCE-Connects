const { addToMailingList } = require("./mailingList");

const addMailsToList = async(data) =>{
  const records = data;
  console.log("records", records);
  records.forEach((res, index) => {
    addToMailingList(records[index].email);
    // console.log(records[index].email);
  });

  console.log("All done");
}

module.exports = addMailsToList;
const express = require('express');
const router = express.Router();

const {addToMailingList} = require("../controllers/mailingList");

router.post("/add", addToMailingList);

module.exports = router;
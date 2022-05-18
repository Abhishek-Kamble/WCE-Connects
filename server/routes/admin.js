const addToMailingList = require('../controllers/addMailsToList');

const router    = require('express').Router(),
    {User}      = require('../models/User'),
    bcrypt      = require('bcrypt'),
    excelFileTojson=require('../controllers/excel-to-json.js'),
    XLSX=require('xlsx'),
     multer=require("multer");
    var storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'./uploads')
    },
    filename:function(req,file,cb)
    {
        cb(null,Date.now()+file.originalname)
    }
})
var upload=multer({storage:storage});

// Index Route
router.get('/', (req, res) => {
    res.send('Admin Home');
});
router.post('/upload',upload.single('excelFile'),async function(req,res)
{
    var fileinfo=req.file;
    var title=req.body.title;
  //  console.log(fileinfo.filename);
    var filename='./uploads/'+fileinfo.filename;
    const data = await excelFileTojson(filename);
    // const data=5;
    console.log("new");
    console.log(excelFileTojson(filename));
    console.log("Final");
    addToMailingList(data);
    //extractEmails(excelFileTojson(filename));

})

module.exports = router;


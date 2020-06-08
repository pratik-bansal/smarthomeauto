const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors=require('cors');
var multer  = require('multer');
const path=require('path');
// var sendgrid = require('@sendgrid/mail');

var fs = require('fs');







const server = express();
server.use(cors());
server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))  // for urlencoded data body
/////////// store dat use to store ////////////////
server.use(express.static('build'));
server.use(express.static('uploads'));

////////// user data storege /////////////
mongoose.connect('mongodb://localhost:27017/Smarthomeautomation', { useNewUrlParser: true })
.then(() => {
  console.log("Connected to database!");
})
.catch((error) => {
  console.log("Connection failed!");
  console.log(error);
});

const UserSchema = new Schema({
    name:  String,
    phone: String, 
    email:String

  });
  
//////////// book data storege ////////////////

const BookSchema = new Schema({
    branch:  String,
    semester: String,
    bookname:String,
    bookurl:String,
    sellingprice:Number,
    MRP:Number,
    uid:String
  });
  

  




///////////// check user data ///////////////////

server.post("/user",function(req,res){
  console.log(req.body);

    User.findOne({email:req.body.email},function(err,doc){
    if(doc){
      res.send(doc);
    }
    else{
      
      let user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.save();
     res.send(user);
     
    }
})


})
    





/////// update the user information ///////////////////

server.put("/updateuser",function(req,res){
  
  User.findOneAndUpdate({email:req.body.email},{$set:{name:req.body.name,phone:req.body.phone}},function(err,doc){
      console.log(doc)  // this will contain db object
  })
})




///////////// save book data in database//////////////

server.post("/savebook",function(req,res){
  let book = new Book();
  book.branch = req.body.branch;
  book.semester = req.body.semester;
  book.bookname = req.body.bookname;
  book.bookurl=req.body.bookurl;
  book.sellingprice=req.body.sellingprice;
  book.MRP=req.body.MRP;
  book.uid=req.body.uid;
  book.save();
 res.send(book);

})






///////////// server side changes save error remove this //////////////////////////

// server.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, './build/')});
// });



server.listen(process.env.PORT || 8080,function(){
    console.log("server started at localhost:8080")
})

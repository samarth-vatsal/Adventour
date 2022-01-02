const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(express.static('client'));

mongoose.connect("mongodb://localhost:27017/adventourDB",{ useNewUrlParser: true,useUnifiedTopology: true });


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // it is used like when the name is not mentioned the given statement is show
    required:[true,"please check your data entry,no name specified!"]
  },
  rating: {          // now it is uses like javascript object
    type: Number,
    min :1,          // it is used to fix the min & max value of number
    max :10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"laal aam",
  rating: 10,
  review: "preety solid as a fruit"
});

fruit.save();



const mango = new Fruit({
  name: "mango",
  rating: 9,
  review: "Great fruit"
});
mango.save();



app.get("/",function(req,res){
res.render("client/index.html");
});

app.get("/login",function(req,res){
res.render("client/login/login.html");
});



app.post("client/index.html",function(req,res){
const newUser =new User({
  fname:req.body.Fname,
  lname:req.body.Lname,
  email:req.body.Userid,
  password:req.body.Password
});
newUser.save(function(err){
  if (err) {
    console.log(err);
  }
  res.render("index.html");
});
});

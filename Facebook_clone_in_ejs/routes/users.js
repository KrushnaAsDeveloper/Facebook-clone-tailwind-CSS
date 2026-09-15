const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

const userSchema = mongoose.Schema({
  username:String,
  password:String
  
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user", userSchema );
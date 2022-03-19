var mongo = require("mongoose")

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://devpolash:<Polash123@dev>@cluster0.zqueq.mongodb.net/EMPmanagement?retryWrites=true&w=majority";

var userSchemaa = new mongo.Schema({
    userName: {
        type: String,
        required: true,
        unique: true // `email` must be unique
      },  
    email: {
        type: String,
        required: true,
        unique: true // `email` must be unique
      }, 
      password:{
        type: String,
        required: true,
      }   
})

var userModel = mongo.model("admin",userSchemaa)
 

module.exports = userModel
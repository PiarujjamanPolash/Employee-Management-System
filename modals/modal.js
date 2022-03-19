var mongo = require("mongoose")
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://devpolash:<Polash123@dev>@cluster0.zqueq.mongodb.net/EMPmanagement?retryWrites=true&w=majority";
var employeeSchemaa = new mongo.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhour:Number,
    total:Number,
    image:String
});
 
var employeeModel = mongo.model("Employee",employeeSchemaa);
module.exports = employeeModel
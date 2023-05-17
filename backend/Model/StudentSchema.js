const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Creating object
let StudentDetails=new Schema(
    {
        Name:{type:String},
        Email:{type:String},
        RollNo:{type:Number}
    },
    {
        collection:'CollectionName'  //the obj name email  will stored in collection
    }

);

module.exports=mongoose.model('student',StudentDetails);
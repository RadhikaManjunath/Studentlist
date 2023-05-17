const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const StudentRoute=require('./Controller/StudentRoute');

//To connect mongodb 
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/reactdb');

//to check whether it is connected or not in 3 line

var db=mongoose.connection;
db.on('error',()=> console.log('error occured'));
db.once('open',()=> console.log('connected to database'));
//mongoose code
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//code for middleware
app.use('/student',StudentRoute);

//listening port no
app.listen(4000,()=> console.log('server started at 4000'));
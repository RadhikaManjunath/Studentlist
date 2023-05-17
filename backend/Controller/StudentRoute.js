
const express=require("express");
const router=express.Router();
const mongoose = require ("mongoose");
//importing module that is present in studentschema

const StudentSchema =require('../Model/StudentSchema');

router.post('/CreateStudent',(req,res)=>{
    StudentSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }
        else
        {
            res.json(data);
        }
    })
});
router.get('/',(req,res)=>{
    StudentSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else
        {
            res.json(data);
        }  
    })
});
//delete student data
router.delete('/delete-student/:id',(req,res)=>{
    StudentSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json({msg:data});
        }
    })
})

router.route('/updatestudent/:id')
.get((req,res)=>{
    StudentSchema.findById(
        mongoose.Types.ObjectId(req.params.id),(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
//update student data
.put((req,res,next)=>{
    StudentSchema.findByIdAndUpdate(
        mongoose.Types.ObjectId(req.params['id'].substring(1)),
        { $set:req.body },
        (error,data)=>{
            if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})
module.exports=router;
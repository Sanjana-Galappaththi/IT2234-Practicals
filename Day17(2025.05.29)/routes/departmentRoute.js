const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Department.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 

router.get('/emp/:id',async (req,res)=>{
    
       const results = await Empleyee.find({departmentId:did},{name:1,departmentId:1}).populate("departmentId")
       
       //manipulating the results
        const filterResult = results.map(emp=>({
            employee_id:emp_id,
            employee_name:emp.name,
            department_name:emp.departmentId.name
        }))
   } )
   
//find how many employee 
// shows the court along with each department details

router.get('/empcount/',async (req,res)=>{
    try{
   const results = await Department.aggregate([
   {
    $lookup:{
        from :'employees',
        localFileId:'_id',
        foreignField:'department',
        as:'employees'
    
       }
    },
   
    {
     $project: {
        name:1,
        location:1,
        number_of_employees:{$size:"$emps"}
     }
    }

   ])
    if(results)
{
    res.status(200).json(results)
}  
else{
    console.error(error);
    res.status(500).send("Server Error ! ")
}  
})

//get project names along with employee details
//get the distinct positons of employees
//along with distinct product positions,show how many employees hold that position 

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Department.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})


module.exports=router
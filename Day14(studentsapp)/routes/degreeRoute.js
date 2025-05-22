const express=require('express')
const app=express.Router()
const Course=require('../models/Degree')
const mongoose = require('mongoose');


router.get('/',async(req,res)=>{
    try{
        const results=await Course.find()
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")

    }

})

router.get('/:id',async(req,res)=>{
    try{
        const results=await Course.findById(id)
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")

    }
})
module.exports=router 
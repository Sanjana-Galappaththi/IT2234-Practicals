const express=require('express');
const app=express();
const port=3001;
const mongoose = require('mongoose')
const Projectrt=require('./route/projectRoute')
const Taskrt=require('./route/taskRoute')
const Userrt=require('./route/userRoute')
const errprHandleMid=require('./middlewares/errorHandler')

app.use(express.json())
app.use(errorHandleMid)
app.use('/Project',Projectrt)
app.use('/Task',Taskrt)
app.use('/User',Userrt)

mongoose.connect('mongodb://localhost:27017/ProjectDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Service running on ${port}`);
})

module.exports=errorHandleMid


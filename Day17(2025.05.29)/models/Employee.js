const mongoose = require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    gender:{type:String},
    age:{type:Number},
    salary:{type:Number},
    ETFId:{
        type:String,
        require:true,
        ref:'ETF'
    },
    departmentId:{
        type:String,
        require:true,
        ref:'Department'
    },
   current_projects:[{type:String,require:true,ref:'Project'}]
})

const Employee = mongoose.model('Employee',employeeSchema)
const Jane = new Employee({
    _id:'001',
    name:'Jane Ayre',
    gender:'female',
    age:25,
    salary:50000,
    ETFId:'EMPPM01',
    departmentId:'PM',
    current_projects:['PR001','PR002']
})
Jane.save()
module.exports=Employee
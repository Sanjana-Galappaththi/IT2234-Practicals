const mongoose=require('mongoose')
const courseSchema=new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    age:{type:Number},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'Degree'
    }


})

const Student=mongoose.model('student',studentSchema)
const Kolins=new Student({
    _id:'2020IT01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'Male',
    degreeId:'FAS2000ICT'

})
//.save()
module.exports=Student
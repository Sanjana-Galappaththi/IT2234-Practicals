const mongoose = require('mongoose')
const etfSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    balance:{type:Number,require:true},
    intrest:{type:String,require:true}
})

const ETF = mongoose.model('ETF',etfSchema)
const etf01 = new ETF({
    _id:'PMETF01',
    balance:15000,
    intrest:'10%'
})
etf01.save()
module.exports=ETF
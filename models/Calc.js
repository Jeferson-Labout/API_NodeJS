const mongoose = require('mongoose')
const Calc = mongoose.model('Calc', {
number1: Number ,
number2: Number ,
status: String,
resultado : Number 
})

module.exports = Calc
const mongoose = require('mongoose')
// const Calc = mongoose.model('Calc', {
  const calcSchema = new mongoose.Schema({
number1: {
  
  type:Number ,
  required: true
},
number2: {
  
  type:Number ,
  required: true
},
status:{
  
  type: String 
 
},
resultado : {
  
  type:Number 

  
}
});

calcSchema.pre('save', async function(next){
  this.status = "Pendente";
  this.resultado = 0 ;
  next();
})

calcSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

calcSchema.set('toJSON', {
  virtuals: true,
});

// userSchema.pre('save', async function(next) {
 
//   next();
// });
exports.Calc = mongoose.model('Calc', calcSchema);
exports.calcSchema = calcSchema;
// module.exports = Calc
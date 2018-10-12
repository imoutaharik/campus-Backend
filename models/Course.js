const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name:String,
  horario:String,
  fecha:Date,
  classroom : [{
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  }],
  teacher:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Course', courseSchema)
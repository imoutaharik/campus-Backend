const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name:String,
  horario:String,
  classroom : [{
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  }]
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Course', courseSchema)
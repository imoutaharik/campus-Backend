const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name:String,
  photoURL:String,
  horario:String,
  date:Date,
  calificaciones:[],
  classrooms : [{
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  }],
  profesor:String,
  manuales : []
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Course', courseSchema)
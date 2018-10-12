const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  name:String,
  photoURL:String,
  horario:String,
  fecha:Date,
  calificaciones:[],
  classroom : [{
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  }],
  teacher:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  manuales : []
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Course', courseSchema)
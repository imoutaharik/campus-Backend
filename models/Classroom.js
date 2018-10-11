const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classroomSchema = new Schema({
  name:String,
  fecha:String,
  carrera : {
    type: Schema.Types.ObjectId,
    ref: "Carrera"
  },
  school : {
    type: Schema.Types.ObjectId,
    ref: "School"
  },
  students : []
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Classroom', classroomSchema)
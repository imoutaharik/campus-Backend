const mongoose = require('mongoose')
const Schema = mongoose.Schema

const calendarSchema = new Schema({
  name:String,
  startDateTime:String,
  endDateTime:String,
  classes:String
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Calendar', calendarSchema)
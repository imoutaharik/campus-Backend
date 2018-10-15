const mongoose = require('mongoose')
const Schema = mongoose.Schema

var now = new Date()

const calendarSchema = new Schema({
  name:String,
  startDateTime:{
    type:Date,
    default: new Date(now).getTime()
  },
  endDateTime:{
    type:Date,
    default: new Date(now).getTime()
  },
  classes:String
},{
  timestamps:{
    updatedAt:"update_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Calendar', calendarSchema)
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  email:  String,
  username: {
    type: String,
    unique: true
  },
  role:{
    type:String,
    enum:['Student', 'Teacher', 'Tutor','Admin'],
    default: 'Student'
  },
  school:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  isSchool:{
    type:Boolean,
    default: false
  },
  tutor:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  photoURL: String,
  asistencia:Number,
  actitud:Number,
  
  empeño:{
    type:String,
    enum : ['EXCELENTE','REGULAR','BAJO'],
    default: 'REGULAR'
  },
  classroom : {
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  },
  cursos:{
    type: Schema.Types.ObjectId,
    ref: "Course"
  }                      
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.plugin(plm,{usernameField:'email'})
const User = mongoose.model('User', userSchema);
module.exports = User;
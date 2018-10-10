const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const schoolSchema = new Schema({
    username: {
        type: String,
        required:true,
        unique:true
    },
    email: String,
    photoURL: String,
    isSchool:{
        type:Boolean,
        default: true
    },
    classroom:[
        {
        type: Schema.Types.ObjectId,
        ref: "Classroom"
        }
      ]
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

schoolSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model('School', schoolSchema)
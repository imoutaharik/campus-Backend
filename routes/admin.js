const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Course = require('../models/Course')
const passport = require('passport')

const {generateToken, verifyToken} = require('../helpers/jwt')

router.get('/manageStudents', (req,res,next)=>{
  User.find({role:"Student"})
  .then(users=>{
    res.status(200).json(users)
  }).catch(e=>next(e))
})

router.get('/manageTeachers', verifyToken, (req,res,next) =>{
  User.find({role:"Teacher"})
  .then(users=>{
      res.status(200).json(users)
    }).catch(e=>next(e))
})

router.post('/manageTeachers', verifyToken, (req,res,next)=>{

  const {email} = req.body
  const emails = email.split(',')
  console.log(emails)

  emails.map(e => {
    User.register({email: e, username: e, school: req.user._id, role: 'Teacher'}, 'temporal')
    .then(user => {
      console.log(user)
      //res.status(201).json(user)
    })
    .catch(err => console.log(err))
  })

})


router.post('/addCourses',verifyToken,(req,res,next)=>{ 
  Course.create(req.body)
      .then(course=>{
          res.status(200).json(course)
      }).catch(e=>{
          res.status(500).json(e)
      })
})

module.exports = router
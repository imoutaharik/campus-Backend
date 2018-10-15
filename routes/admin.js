const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Classroom = require('../models/Classroom')
const Calendar = require('../models/Calendar')
const Course = require('../models/Course')
const passport = require('passport')

const {generateToken, verifyToken} = require('../helpers/jwt')

router.post('/deleteStudent', verifyToken, (req,res,next)=>{
  User.findByIdAndRemove(req.body._id)
  .then(c=>{
    res.status(201).json(c)
  })
  .catch(e=>{
      res.status(500).json(e)
  })
})

router.post('/deleteTeacher', verifyToken, (req,res,next)=>{
  User.findByIdAndRemove(req.body._id)
  .then(c=>{
    res.status(201).json(c)
  })
  .catch(e=>{
      res.status(500).json(e)
  })
})

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
    User.register({...req.body, school: req.user._id, role: 'Teacher'}, 'profesor')
    .then(user=>{
      console.log(user)
      res.status(201).json(user)
    }).catch(e=>res.status(500).json(e))

})

router.get('/teachersSelect', verifyToken, (req,res,next)=>{
  User.find({role:"Teacher"})
  .then(users=>{
      res.status(200).json(users)
    }).catch(e=>next(e))
})

router.get('/classroomsSelect', verifyToken, (req,res,next)=>{  
  Classroom.find()
  .then(c=>{
      res.status(200).json(c)
    }).catch(e=>next(e))
})


router.post('/addCourses',verifyToken,(req,res,next)=>{ 
  Course.create({...req.body, classrooms: req.body.classrooms})
      .then(course=>{
          res.status(200).json(course)
      }).catch(e=>{
          res.status(500).json(e)
      })
})


router.get('/AddCalendarEvent',verifyToken,(req,res,next)=>{
   Calendar.find()
   .then(c=>{
    res.status(200).json(c)
  }).catch(e=>next(e))
})

router.post('/AddCalendarEvent',verifyToken,(req,res,next)=>{ 
  Calendar.create(req.body)
      .then(item=>{
        res.status(200).json(item)
      }).catch(e=>{
      res.status(500).json(e)
      })
})




module.exports = router
const express = require('express')
const router = express.Router()
const Classroom = require('../models/Classroom')
const User = require('../models/User')
const passport = require('passport')

const {generateToken, verifyToken} = require('../helpers/jwt')

router.post('/login',
passport.authenticate("local"),(req,res,next)=>{
    const token = generateToken(req.user)
    res.status(200).json({token, user:req.user})
})

router.post('/signup', (req,res,next)=>{
    req.body.role = 'Admin'
    req.body.isSchool = true
    User.register(req.body, req.body.password)
    .then(user=>{
       
        console.log(user)
        res.status(201).json(user)
    })
    .catch(e=>res.status(500).json(e))
})

router.post('/admin/addClassroom',verifyToken,(req,res,next)=>{
    const {email} = req.body
    const emails = email.split(',')
    //el class

    req.body.school = req.user._id
    
    Classroom.create(req.body)
        .then(classroom=>{
            emails.map(e=>{
                const user = {
                    email:e,
                    school:req.user._id,
                    classroom:classroom._id,
                    username:e
                }
                User.register(user,'perrin')
                    .then(us=>{
                        console.log('created', us)
                    }).catch(e=>{
                        console.log(e)
                        res.status(500).json(e)
                    })
            })
            res.status(200).json(classroom)
        }).catch(e=>{
            res.status(500).json(e)
        })
})


module.exports = router
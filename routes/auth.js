const express = require('express')
const router = express.Router()
const School = require('../models/School')
const passport = require('passport')
const {generateToken, verifyToken} = require('../helpers/jwt')

router.post('/login',
 passport.authenticate('local'), 
 (req,res,next)=>{
    const token = generateToken(req.user)
    res.status(200).json({token, user:req.user})
})

router.post('/signup', (req,res,next)=>{
    School.register(req.body, req.body.password)
    .then(school=>{
        console.log(school)
        res.status(201).json(school)
    })
    .catch(e=>res.status(500).json(e))
})



module.exports = router
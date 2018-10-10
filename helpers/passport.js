const passport = require('passport')
const School = require('../models/School')

passport.use(School.createStrategy())
passport.serializeUser(School.serializeUser())
passport.deserializeUser(School.deserializeUser())

module.exports = passport
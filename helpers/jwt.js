const jwt = require('jsonwebtoken')
const School = require('../models/School')

exports.verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization']
    if(!token) return res.status(401).json({message:"Hubo un error, porfavor reintente"})

    jwt.verify(token, process.env.TOKEN_GENERATOR, (err, decoded)=>{
        if(err) return res.status(401).json({message:"Tu sesión caduco"})

        School.findById(decoded.userId)
        .then(school=>{
            req.user = school
            next()
        })
    })
    
}

exports.generateToken = (school) => {
    return jwt.sign({
        userId: school._id,
        email: school.email
    },
    process.env.TOKEN_GENERATOR,
    {expiresIn:"72 hours"} 
    )
}
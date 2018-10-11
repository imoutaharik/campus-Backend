const passport = require('passport')
const User = require('../models/User')
//const LocalStrategy = require("passport-local").Strategy;


// passport.serializeUser((user, cb) => {
//   cb(null, user._id);
// });
// passport.serializeUser(function(user, done) {
//   console.log(user, 'seri')
//   done(null, user._id);
//   // if (isUser(user)) {
//   //   // serialize user
//   // } else if (isCompany(user)) {
//   //   // serialize company
//   // }
// });
// passport.deserializeUser((id, cb) => {
//   console.log(id, 'deseri')
//   User.findById(id, (err, user) => {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

// // passport.use(new LocalStrategy((email, password, next) => {
// //   console.log('lalalal')
// //   User.findOne({ email }, (err, user) => {
// //     if (err) {
// //       return next(err);
// //     }
// //     if (!user) {
// //       return next(null, false, { message: "Incorrect username" });
// //     }
// //     if (!bcrypt.compareSync(password, user.password)) {
// //       return next(null, false, { message: "Incorrect password" });
// //     }

// //     return next(null, user);
// //   });
// // }));


// passport.use('user', new LocalStrategy(
  
//   function(username, password, done) {
//     console.log('lelelel')
//     User.findOne({ username }, (err, user) => {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return next(null, false, { message: "Incorrect username" });
//       }
     
//       return next(null, user);
//     });
//   }
// ));

// passport.use('company', new LocalStrategy(
//   function(email, password, done) {
//     School.findOne({ email }, (err, user) => {
//       if (err) {
//         return next(err);
//       }
//       if (!user) {
//         return next(null, false, { message: "Incorrect username" });
//       }
//       if (!bcrypt.compareSync(password, user.password)) {
//         return next(null, false, { message: "Incorrect password" });
//       }
  
//       return next(null, user);
//     });
//   }
// ));
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


module.exports = passport
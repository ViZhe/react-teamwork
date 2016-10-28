
import passport from 'passport'
import {Strategy} from 'passport-local'

import User from './model'


passport.use('localLogin', new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({email}, (err, user) => {
    if (err) {
      return done(null, null, {where: 'passLoginErr', err, user})
    }
    if (!user) {
      return done(null, null, {where: 'passLoginUser', err, user})
    }
    if (!user.validPassword(password)) {
      return done(null, null, {where: 'passLoginCompare', err, user})
    }
    return done(null, user)
  })
}))

passport.use('localSignup', new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({email}, (err, user) => {
    if (err) {
      return done(null, null, {where: 'passSingupErr', err, user})
    }
    if (user) {
      return done(null, null, {where: 'passSingupUser', err, user})
    }

    const newUser = new User()
    newUser.email = email
    newUser.password = newUser.encryptPassword(password)

    return newUser.save((error, savedUser) => (
      done(error, savedUser)
    ))
  })
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


export default passport

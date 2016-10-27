
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'

import User from './model'


passport.use('localSignup', new LocalStrategy.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({email}, (err, user) => {
    if (err) {
      return done(null, null, {where: 'indexErr', err, user})
    }
    if (user) {
      return done(null, null, {where: 'indexUser', err, user})
    }

    const newUser = new User()
    newUser.email = email
    newUser.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

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

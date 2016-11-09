
import passport from 'passport'
import {Strategy} from 'passport-local'

import User from '../models/User'


const strategyOption = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}

passport.use('localSignIn', new Strategy(
  strategyOption,
  (req, email, password, done) => {
    User.findOne({email})
      .exec()
      .then((user) => {
        if (!user || !user.validPassword(password)) {
          return done(null, false, {
            message: 'Wrong credentials'
          })
        }

        return done(null, user)
      })
      .catch(done)
  }
))

passport.use('localSignUp', new Strategy(
  strategyOption,
  (req, email, password, done) => {
    User.findOne({email})
      .exec()
      .then((user) => {
        if (user) {
          return done(null, false, {
            message: 'Email already exists'
          })
        }

        const newUser = new User()
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)

        newUser.save().catch(done)

        return done(null, newUser)
      })
      .catch(done)
  }
))

passport.serializeUser(({id}, done) => {
  done(null, id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


export default passport


import passport from 'passport'
import {Strategy} from 'passport-local'

import User from './model'


const strategyOption = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}

passport.use('localSignIn', new Strategy(
  strategyOption,
  (req, email, password, done) => {
    User.findOne({email}, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, {
          message: 'Wrong credentials'
        })
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Wrong credentials'
        })
      }

      const {_id: id} = user
      return done(null, {id})
    })
  }
))

passport.use('localSignUp', new Strategy(
  strategyOption,
  (req, email, password, done) => {
    User.findOne({email}, (err, user) => {
      if (err) {
        return done(err)
      }
      if (user) {
        return done(null, false, {
          message: 'Email already exists'
        })
      }

      const newUser = new User()
      newUser.email = email
      newUser.password = newUser.encryptPassword(password)

      return newUser.save((error, {_id: id}) => {
        if (err) {
          return done(err)
        }
        return done(null, {id})
      })
    })
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

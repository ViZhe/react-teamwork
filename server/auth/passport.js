
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
    User.findOne({email})
      .then((user) => {
        if (!user || !user.validPassword(password)) {
          return done(null, false, {
            message: 'Wrong credentials'
          })
        }

        const {_id} = user
        return done(null, {_id})
      })
      .catch(done)
  }
))

passport.use('localSignUp', new Strategy(
  strategyOption,
  (req, email, password, done) => {
    User.findOne({email})
      .then((user) => {
        if (user) {
          return done(null, false, {
            message: 'Email already exists'
          })
        }

        const newUser = new User()
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)

        return newUser.save((err, {_id}) => {
          if (err) {
            return done(err)
          }
          return done(null, {_id})
        })
      })
      .catch(done)
  }
))

passport.serializeUser(({_id}, done) => {
  done(null, _id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


export default passport


import {Router} from 'express'


const handleAuthenticate = (err, user, info, res) => {
  if (err) {
    return res.status(500).json(err)
  }
  if (!user) {
    return res.status(409).json(info)
  }
  return res.status(200).json(user)
}

const routes = (passport) => {
  const router = new Router()

  router.post('/signin', (req, res, next) => (
    passport.authenticate('localSignIn', (err, user, info) => (
      handleAuthenticate(err, user, info, res)
    ))(req, res, next)
  ))

  router.post('/signup', (req, res, next) => (
    passport.authenticate('localSignUp', (err, user, info) => (
      handleAuthenticate(err, user, info, res)
    ))(req, res, next)
  ))

  return router
}


export default routes

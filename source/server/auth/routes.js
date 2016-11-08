
import {Router} from 'express'


const handleAuthenticate = (err, user, info, req, res) => {
  if (err) {
    return res.status(500).json(err)
  }
  if (!user) {
    return res.status(409).json(info)
  }
  return req.logIn(user, (error) => {
    if (error) {
      return res.status(500).json(error)
    }
    return res.status(200).json(user)
  })
}

const routes = (passport) => {
  const router = new Router()

  router.post('/signin', (req, res, next) => (
    passport.authenticate('localSignIn', (err, user, info) => (
      handleAuthenticate(err, user, info, req, res)
    ))(req, res, next)
  ))

  router.post('/signup', (req, res, next) => (
    passport.authenticate('localSignUp', (err, user, info) => (
      handleAuthenticate(err, user, info, req, res)
    ))(req, res, next)
  ))

  router.get('/signout', (req, res) => {
    req.logOut()
    return res.status(200).json({
      signout: true
    })
  })

  return router
}

export default routes

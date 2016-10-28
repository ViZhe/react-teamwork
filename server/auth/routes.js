
import {Router} from 'express'


const routes = (passport) => {
  const router = new Router()

  router.post('/login', (req, res, next) => (
    passport.authenticate('localLogin', (err, user, info) => {
      if (err) {
        return res.status(201).json({where: 'routesLoginErr', err, info})
      }
      if (!user) {
        return res.status(201).json({where: 'routesLoginUser', user, err, info})
      }
      return res.status(200).json(user)
    })(req, res, next)
  ))

  router.post('/signup', (req, res, next) => (
    passport.authenticate('localSignup', (err, user, info) => {
      if (err) {
        return res.status(201).json({where: 'routesSingupErr', err, info})
      }
      if (!user) {
        return res.status(201).json({where: 'routesSingupUser', user, info, err})
      }
      return res.status(200).json(user)
    })(req, res, next)
  ))

  return router
}


export default routes

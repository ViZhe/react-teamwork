
import {Router} from 'express'


const routes = (passport) => {
  const router = new Router()

  router.post('/signup', (req, res, next) => (
    passport.authenticate('localSignup', (err, user, info) => {
      if (err) {
        return res.status(201).json({where: 'routesErr', err, info})
      }
      if (!user) {
        return res.status(201).json({where: 'routesUser', user, info, err})
      }
      return res.status(200).json(user)
    })(req, res, next)
  ))

  return router
}


export default routes

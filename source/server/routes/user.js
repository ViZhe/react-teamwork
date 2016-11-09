
import {Router} from 'express'

import User from '../models/User'
import {authMiddleware} from '../middleware'


const router = new Router()

const item = (req, res) => {
  User.findById(req.userId)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized'
        })
      }

      return res.json(user)
    })
    .catch(err => res.status(500).json(err))
}

router
  .all('*',
    authMiddleware.isAuthenticated
  )
  .get('/', item)


export default router

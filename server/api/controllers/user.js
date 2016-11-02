
import User from '../../auth/model'


export default {
  get: (req, res) => {
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
}

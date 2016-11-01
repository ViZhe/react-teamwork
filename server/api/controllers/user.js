
import User from '../../auth/model'


export default {
  get: (req, res) => {
    User.findById(req.userId)
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: 'Unauthorized'
          })
        }

        const {
          _id,
          email
        } = user

        return res.json({
          _id,
          email
        })
      })
      .catch(err => res.status(500).json(err))
  }
}

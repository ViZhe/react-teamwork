
import User from '../../auth/model'


export default {
  get: (req, res) => {
    const userId = req.session.passport && req.session.passport.user
    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
    return User.findById(userId, (err, user) => {
      if (err) {
        return res.status(500).json(err)
      }
      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized'
        })
      }

      const {
        _id: id,
        email
      } = user

      return res.status(200).json({
        id,
        email
      })
    })
  }
}

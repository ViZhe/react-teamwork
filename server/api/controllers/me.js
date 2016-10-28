
import User from '../../auth/model'


export default {
  get: (req, res) => {
    User.findById(req.session.user, (err, user) => {
      if (err) {
        return res.status(403).json({
          err: 'odin'
        })
      }
      if (!user) {
        return res.status(403).json({
          err: 'dva'
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


export const isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }
  // eslint-disable-next-line no-param-reassign
  req.userId = req.session.passport.user

  return next()
}

export const test = (req, res, next) => next()

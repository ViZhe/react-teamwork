

export default {
  list: (req, res) => {
    res.status(200).json([
      {
        id: 1,
        name: 'Первая доска'
      },
      {
        id: 2,
        name: 'Вторая доска'
      }
    ])
  }
}

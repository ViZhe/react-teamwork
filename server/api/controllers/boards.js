

export default {
  list: (req, res) => {
    res.status(200).json([
      {
        id: 'boardId1',
        name: 'Первая доска',
        position: 1
      },
      {
        id: 'boardId2',
        name: 'Вторая доска',
        position: 2
      }
    ])
  }
}

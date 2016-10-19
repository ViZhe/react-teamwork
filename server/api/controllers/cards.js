

export default {
  list: (req, res) => {
    res.status(200).json([
      {
        id: 1,
        column_id: 'columnId1',
        name: 'Первая карточка',
        position: 1
      },
      {
        id: 2,
        column_id: 'columnId1',
        name: 'Вторая карточка',
        position: 2
      },
      {
        id: 3,
        column_id: 'columnId2',
        name: 'Третья карточка',
        position: 1
      }
    ])
  }
}

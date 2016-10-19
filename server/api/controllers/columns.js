

export default {
  list: (req, res) => {
    res.status(200).json([
      {
        id: 'columnId1',
        board_id: 'boardId1',
        name: 'Первый столбец',
        position: 1
      },
      {
        id: 'columnId2',
        board_id: 'boardId1',
        name: 'Второй столбец',
        position: 2
      },
      {
        id: 'columnId3',
        board_id: 'boardId2',
        name: 'Третий столбец',
        position: 1
      }
    ])
  }
}

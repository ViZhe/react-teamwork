

export default {
  list: (req, res) => {
    res.status(200).json([
      {
        id: 1,
        board_id: 1,
        name: 'Первый столбец',
        position: 1
      },
      {
        id: 2,
        board_id: 1,
        name: 'Второй столбец',
        position: 2
      },
      {
        id: 3,
        board_id: 2,
        name: 'Третий столбец',
        position: 1
      }
    ])
  }
}

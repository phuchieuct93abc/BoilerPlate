const initTable = [
  [6, 7, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 1, 8, 9, 7, 0, 0, 6],
  [0, 0, 0, 0, 6, 0, 0, 0, 0],
  [1, 0, 0, 3, 2, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 8, 0, 2, 0],
  [0, 8, 0, 5, 0, 0, 4, 7, 0],
  [7, 0, 0, 0, 8, 5, 9, 0, 2],
  [0, 6, 9, 0, 0, 0, 1, 0, 0],
  [8, 2, 0, 0, 0, 0, 5, 0, 0],
]
export default function currentSudoku(state = { data: initTable }, action) {
  switch (action.type) {
    case 'UPDATE_SUDOKU': {

      return {
        ...state,
        data: action.data
      };
    }
    case 'RESET_SUDOKU': {
      return {
        ...state,
        data: initTable
      };
    }


    default:
      return state;
  }
}

/**
 Do not return anything, modify board in-place instead.
 */

const isValid = (
  row: number,
  col: number,
  val: string,
  board: string[][]
): boolean => {
  // check row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === val) {
      return false;
    }
  }
  // check col
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === val) {
      return false;
    }
  }
  // check square
  const startRow = ~~(row / 3) * 3;
  const startCol = ~~(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === val) {
        return false;
      }
    }
  }
  return true;
};
const helper = (board: string[][]): boolean => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== ".") {
        continue;
      }
      for (let x = 1; x <= 9; x++) {
        if (isValid(i, j, x.toString(), board)) {
          board[i][j] = x.toString();
          if (helper(board)) return true;
          board[i][j] = ".";
        }
      }
      return false;
    }
  }
  return true;
};
function solveSudoku(board: string[][]): void {
  helper(board);
}

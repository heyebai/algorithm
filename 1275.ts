// [
//     [' ',' ',' '],
//     [' ',' ',' '],
//     [' ',' ',' ']
// ]

const isWin = (board: string[][], piece: string): boolean => {
  // top to bottom
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== piece) {
        break;
      }
      if (j === 2) {
        return true;
      }
    }
  }

  // left to right
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[j][i] !== piece) {
        break;
      }
      if (j === 2) {
        return true;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[i][i] !== piece) {
      break;
    }
    if (i === 2) {
      return true;
    }
  }

  const possibleWin = [
    [0, 2],
    [1, 1],
    [2, 0],
  ];
  for (let i = 0; i < 3; i++) {
    const [x, y] = possibleWin[i];
    if (board[x][y] !== piece) {
      break;
    }
    if (i === 2) {
      return true;
    }
  }
  return false;
};

function tictactoe(moves: number[][]): string {
  const board = new Array(3).fill(0).map(() => new Array(3).fill(" "));
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];
    if (i % 2 === 0) {
      board[x][y] = "X";
    } else {
      board[x][y] = "O";
    }
    if (i >= 4) {
      if (isWin(board, "X")) {
        return "A";
      }
      if (isWin(board, "O")) {
        return "B";
      }
    }
  }
  if (moves.length < 9) {
    return "Pending";
  }
  return "Draw";
}

function tictactoe1(moves: number[][]): string {
  const aRow = new Map();
  const bRow = new Map();
  const aColumn = new Map();
  const bColumn = new Map();
  let aSlash = 0;
  let aBackSlash = 0;
  let bSlash = 0;
  let bBackSlash = 0;
  for (let i = 0; i < 3; i++) {
    aRow.set(i, 0);
    bRow.set(i, 0);
    aColumn.set(i, 0);
    bColumn.set(i, 0);
  }
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];
    if (i % 2 === 0) {
      if (x + y === 2) {
        aBackSlash++;
      }
      if (x === y) {
        aSlash++;
      }
      aRow.set(x, aRow.get(x) + 1);
      aColumn.set(y, aColumn.get(y) + 1);
      if (
        aBackSlash === 3 ||
        aSlash === 3 ||
        aRow.get(x) === 3 ||
        aColumn.get(y) === 3
      ) {
        return "A";
      }
    } else {
      if (x + y === 2) {
        bBackSlash++;
      }
      if (x === y) {
        bSlash++;
      }
      bRow.set(x, bRow.get(x) + 1);
      bColumn.set(y, bColumn.get(y) + 1);
      if (
        bBackSlash === 3 ||
        bSlash === 3 ||
        bRow.get(x) === 3 ||
        bColumn.get(y) === 3
      ) {
        return "B";
      }
    }
  }
  if (moves.length < 9) {
    return "Pending";
  }
  return "Draw";
}

const graph = [
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const record = [];
for (let i = 0; i < graph.length; i++) {
  record.push([...graph[i]]);
}
let result = 0;
const dfs = (i, j) => {
  if (record[i][j] === 0 || record[i][j] === -1) {
    return;
  }
  record[i][j] = -1;
  for (let m = 0; m < directions.length; m++) {
    if (
      record[i + directions[m][0]] &&
      record[i + directions[m][0]][j + directions[m][1]] === 1
    ) {
      dfs(i + directions[m][0], j + directions[m][1]);
    }
  }
};
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    if (record[i][j] === 1) {
      result++;
      dfs(i, j);
    }
  }
}

console.log(result);

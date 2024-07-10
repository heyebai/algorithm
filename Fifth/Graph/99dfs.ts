const graph = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
let result = 0;
const dfs = (graph, x, y) => {
  graph[x][y] = -1;
  if (y + 1 < 5 && graph[x][y + 1] === 1) {
    dfs(graph, x, y + 1);
  }
  if (x + 1 < 4 && graph[x + 1][y] === 1) {
    dfs(graph, x + 1, y);
  }
  if (x - 1 > 0 && graph[x - 1][y] === 1) {
    dfs(graph, x - 1, y);
  }
  if (y - 1 > 0 && graph[x][y - 1] === 1) {
    dfs(graph, x, y - 1);
  }
};
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    if (graph[i][j] === 1) {
      result += 1;
      dfs(graph, i, j);
    } else {
      graph[i][j] = -1;
    }
  }
}

result;

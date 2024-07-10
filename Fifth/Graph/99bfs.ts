const graph = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
let result = 0;

const bfs = (graph, x, y) => {
  graph[x][y] = -1;
  const queue = [];
  if (y + 1 < 5 && graph[x][y + 1] === 1) {
    queue.push([x, y + 1]);
  }
  if (x + 1 < 4 && graph[x + 1][y] === 1) {
    queue.push([x + 1, y]);
  }
  if (x - 1 > 0 && graph[x - 1][y] === 1) {
    queue.push([x - 1, y]);
  }
  if (y - 1 > 0 && graph[x][y - 1] === 1) {
    queue.push([x, y - 1]);
  }
  while (queue.length) {
    const [m, n] = queue.shift();
    bfs(graph, m, n);
  }
};

for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    if (graph[i][j] === 1) {
      result++;
      bfs(graph, i, j);
    }
  }
}
result;

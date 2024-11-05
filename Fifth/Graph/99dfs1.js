const graph = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const getCount = (m, n) => {
  const booleanGraph = new Array(m)
    .fill(0)
    .map((_) => new Array(n).fill(false));

  const dfs = (x, y) => {
    for (let i = 0; i < direction.length; i++) {
      const [a, b] = direction[i];
      if (x + a >= 0 && x + a < m && y + b >= 0 && y + b < n) {
        if (!booleanGraph[x + a][y + b] && graph[x + a][y + b] === 1) {
          booleanGraph[x + a][y + b] = true;
          dfs(x + a, y + b);
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1 && !booleanGraph[i][j]) {
        booleanGraph[i][j] = true;
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

console.log(getCount(4, 5));

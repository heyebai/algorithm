function waterFlow(n, m, grid) {
  const dir = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dfs = (grid, visited, x, y) => {
    if (visited[x][y]) return;

    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nextx = x + dir[i][0];
      const nexty = y + dir[i][1];
      if (nextx < 0 || nextx >= n || nexty < 0 || nexty >= m) continue;
      if (grid[x][y] > grid[nextx][nexty]) continue; // Traverse from lower to higher elevation

      dfs(grid, visited, nextx, nexty);
    }
  };

  const firstBorder = Array.from({ length: n }, () => Array(m).fill(false));
  const secondBorder = Array.from({ length: n }, () => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    dfs(grid, firstBorder, i, 0); // Traverse the leftmost column, touching the first border
    dfs(grid, secondBorder, i, m - 1); // Traverse the rightmost column, touching the second border
  }

  for (let j = 0; j < m; j++) {
    dfs(grid, firstBorder, 0, j); // Traverse the topmost row, touching the first border
    dfs(grid, secondBorder, n - 1, j); // Traverse the bottommost row, touching the second border
  }
  firstBorder;
  secondBorder;
  const results = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (firstBorder[i][j] && secondBorder[i][j]) {
        results.push([i, j]);
      }
    }
  }

  return results;
}

// Example usage:
const n = 5;
const m = 5;
const grid = [
  [1, 3, 1, 2, 4],
  [1, 2, 1, 3, 2],
  [2, 4, 7, 2, 1],
  [4, 5, 6, 1, 1],
  [1, 4, 1, 2, 1],
];

const result = waterFlow(n, m, grid);
// result.forEach(([x, y]) => {
//     console.log(`${x} ${y}`);
// });

function countServers(grid: number[][]): number {
  const row = new Array(grid.length).fill(0),
    column = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        row[i]++;
        column[j]++;
      }
    }
  }
  let res = 0;
  // horizental
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && (row[i] > 1 || column[j] > 1)) {
        res++;
      }
    }
  }
  return res;
}

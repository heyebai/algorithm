const graph = [
  [1, 0, 0, 0, 0],
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
  let result = 0;

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [tx, ty] = queue.shift();
      graph[tx][ty] = -1;

      for (let i = 0; i < direction.length; i++) {
        const [a, b] = direction[i];
        const nextX = tx + a;
        const nextY = ty + b;
        if (nextX >= 0 && nextY >= 0 && nextX < m && nextY < n) {
          if (graph[nextX][nextY] === 1) {
            queue.push([nextX, nextY]);
          }
        }
      }
      // if (graph[a][b] === 1) {
      //   queue.push();
      // }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        result++;
        bfs(i, j);
      }
    }
  }

  return result;
};

console.log(getCount(4, 5));

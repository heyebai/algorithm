const directions = [
  [0, 1], // Right
  [1, 0], // Down
  [-1, 0], // Up
  [0, -1], // Left
];

function bfs(grid, visited, x, y) {
  const queue = []; // Define queue
  queue.push([x, y]); // Add starting node to the queue
  visited[x][y] = true; // Mark the starting node as visited

  while (queue.length > 0) {
    // Traverse elements in the queue
    const [curx, cury] = queue.shift(); // Dequeue an element
    for (const [dx, dy] of directions) {
      // Traverse in four directions
      const nextx = curx + dx;
      const nexty = cury + dy; // Get coordinates in four directions
      if (
        nextx < 0 ||
        nextx >= grid.length ||
        nexty < 0 ||
        nexty >= grid[0].length
      )
        continue; // Skip if coordinates are out of bounds
      if (!visited[nextx][nexty]) {
        // If the node has not been visited
        queue.push([nextx, nexty]); // Add the node to the queue for the next round
        visited[nextx][nexty] = true; // Mark as visited to avoid re-visitation
      }
    }
  }
}

// Example usage:
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const visited = Array.from({ length: grid.length }, () =>
  Array(grid[0].length).fill(false)
);
bfs(grid, visited, 0, 0);

console.log(visited);

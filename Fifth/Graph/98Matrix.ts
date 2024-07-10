const result = []; // Collect paths that meet the condition
let path = []; // Path from node 1 to the destination node

// function dfs(graph, x, n) {
//   // If the current node x reaches node n
//   if (x === n) {
//     result.push([...path]);
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     // Traverse all nodes linked to node x
//     if (graph[x][i] === 1) {
//       // Find the nodes linked to x
//       path.push(i); // Add the traversed node to the path
//       dfs(graph, i, n); // Enter the next level of recursion
//       path.pop(); // Backtrack, remove the current node from the path
//     }
//   }
// }

// Example usage
const n = 4; // Number of nodes
const m = 4; // Number of edges
const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
];

// const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

// [
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 1, 0 ],
//     [ 0, 0, 0, 1, 0 ],
//     [ 0, 0, 0, 0, 1 ],
//     [ 0, 0, 0, 0, 0 ]
//   ]

const graph = new Array(5).fill(0).map(() => new Array(5).fill(0));

edges.forEach((edge) => {
  const [x, y] = edge;
  graph[x][y] = 1;
});

const dfs = (graph, currNode, endNode) => {
  if (currNode === endNode) {
    result.push([...path]);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (graph[currNode][i] === 1) {
      path.push(i);
      dfs(graph, i, endNode);
      path.pop();
    }
  }
};
// Populate the adjacency matrix
// edges.forEach(([s, t]) => {
//   graph[s][t] = 1;
// });

console.log(graph);
path.push(1); // The path starts from node 1
dfs(graph, 1, n); // Start traversing
result;

const result = []; // Collect paths that meet the condition
let path = []; // Path from node 1 to the destination node

// function dfs(graph, x, n) {
//   if (x === n) {
//     // If the current node x reaches node n
//     result.push([...path]); // Add the current path to result
//     return;
//   }

//   for (const i of graph[x]) {
//     // Traverse all nodes linked to node x
//     path.push(i); // Add the traversed node to the path
//     dfs(graph, i, n); // Enter the next level of recursion
//     path.pop(); // Backtrack, remove the current node from the path
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

// const graph = Array.from({ length: n + 1 }, () => []);

// // Populate the adjacency list
// edges.forEach(([s, t]) => {
//   graph[s].push(t);
// });

// [ [], [ 2, 3 ], [ 3 ], [ 4 ], [] ]
const graph = new Array(5).fill(0).map(() => new Array());

edges.forEach((edge) => {
  const [x, y] = edge;
  graph[x].push(y);
});
console.log(graph);
const dfs = (graph, currNode, endNode) => {
  if (currNode === endNode) {
    result.push([...path]);
    return;
  }

  for (let j = 0; j < graph[currNode].length; j++) {
    path.push(graph[currNode][j]);
    dfs(graph, graph[currNode][j], endNode);
    path.pop();
  }
};

path.push(1); // The path starts from node 1
dfs(graph, 1, n); // Start traversing
result;
// Output the result

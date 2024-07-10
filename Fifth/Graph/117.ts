// 5 4
// 0 1
// 0 2
// 1 3
// 2 4
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];
const graph = new Array(5).fill(0).map(() => new Array());
const inDegress = new Array(5).fill(0);
edges.forEach((edge) => {
  const [x, y] = edge;
  inDegress[y]++;
  graph[x].push(y);
});
console.log(graph);
inDegress;
const queue = [];
inDegress.forEach((degress, index) => {
  if (degress === 0) {
    queue.push(index);
  }
});
queue;

const result = [];
while (queue.length) {
  queue;
  const node = queue.shift();
  result.push(node);
  //   graph[node];
  console.log(graph[node]);
  for (const k of graph[node]) {
    inDegress[k]--;
    // inDegress
    if (inDegress[k] === 0) {
      queue.push(k);
    }
  }
}
result;

// function topologicalSort(n, m, dependencies) {
//   const inDegree = Array(n).fill(0); // Record the in-degree of each file
//   const adjacencyList = new Map(); // Record file dependency relationships

//   for (let i = 0; i < n; i++) {
//     adjacencyList.set(i, []);
//   }

//   // Process the dependencies
//   dependencies.forEach(([s, t]) => {
//     inDegree[t]++; // Increase the in-degree of t
//     adjacencyList.get(s).push(t); // Record that s points to t
//   });
//   adjacencyList;
//   inDegree;
//   const queue = [];
//   for (let i = 0; i < n; i++) {
//     // Files with in-degree of 0 can be starting points
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }

//   const result = [];
//   while (queue.length) {
//     const cur = queue.shift(); // Current selected file
//     result.push(cur);
//     const files = adjacencyList.get(cur); // Get files that cur points to

//     files.forEach((file) => {
//       inDegree[file]--; // Decrease the in-degree of the pointed file
//       if (inDegree[file] === 0) {
//         queue.push(file);
//       }
//     });
//   }

//   if (result.length === n) {
//     return result;
//   } else {
//     return [-1];
//   }
// }

// Example usage:
// const n = 5;
// const m = 4;
// const dependencies = [
//   [0, 1],
//   [0, 2],
//   [1, 3],
//   [2, 4],
// ];

// const result = topologicalSort(n, m, dependencies);
// console.log(result.join(" "));

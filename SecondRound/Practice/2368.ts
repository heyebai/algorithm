function reachableNodes(
  n: number,
  edges: number[][],
  restricted: number[]
): number {
  let res: number = 0;
  const visited: Set<number> = new Set();
  const graph: number[][] = new Array(n).fill(0).map((_) => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);
  const dfs = (index: number) => {
    console.log(visited);
    visited.add(index);
    res++;
    for (let n of graph[index]) {
      if (!visited.has(n) && !restricted.includes(n)) {
        dfs(n);
      }
    }
  };
  dfs(0);
  return res;
}

const a = reachableNodes(
  7,
  [
    [0, 1],
    [1, 2],
    [3, 1],
    [4, 0],
    [0, 5],
    [5, 6],
  ],
  [4, 5]
);

console.log(a);

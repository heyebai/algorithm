const bfs = (edges: number[], start: number): number[] => {
  const res: number[] = new Array(edges.length).fill(Number.MAX_SAFE_INTEGER);
  res[start] = 0;
  const queue = [];
  queue.push(start);
  let curr = start;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const n = queue.shift();
      res[n] = res[curr] + 1;
      curr = n;
      if (n !== -1) {
        queue.push(n);
      }
    }
  }
  return res;
};

function closestMeetingNode(
  edges: number[],
  node1: number,
  node2: number
): number {
  const arr1 = bfs(edges, node1);
  const arr2 = bfs(edges, node2);
  const res = [];
  console.log(arr1);
  for (let i = 0; i < arr1.length; i++) {
    if (
      arr1[i] !== Number.MAX_SAFE_INTEGER &&
      arr2[i] !== Number.MAX_SAFE_INTEGER
    ) {
      res.push([Math.max(arr1[i], arr2[i]), i]);
    }
  }
  console.log(res);
  res.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return res.length === 0 ? -1 : res[0][1];
}
console.log(closestMeetingNode([2, 2, 3, -1], 0, 1));

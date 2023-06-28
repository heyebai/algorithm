function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let valid = true;
  const edge = new Array(numCourses).fill(0).map((_) => new Array());
  const visited = new Array(numCourses).fill(0);
  const dfs = (u: number) => {
    visited[u] = 1;
    for (let v of edge[u]) {
      if (visited[v] === 0) {
        dfs(v);
        if (!valid) {
          return;
        }
      } else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }
    visited[u] = 2;
  };
  for (let p of prerequisites) {
    edge[p[1]].push(p[0]);
  }
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] == 0) {
      dfs(i);
    }
  }
  return valid;
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const edge = new Array(numCourses).fill(0).map((_) => new Array());
  const indeg = new Array(numCourses).fill(0);
  for (let p of prerequisites) {
    edge[p[1]].push(p[0]);
    indeg[p[0]]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }
  console.log(indeg);
  let visited = 0;
  while (queue.length) {
    console.log(queue, visited);
    visited += 1;
    const i = queue.shift();
    for (let c of edge[i]) {
      indeg[c]--;
      if (indeg[c] === 0) {
        queue.push(c);
      }
    }
  }
  return visited === numCourses;
}

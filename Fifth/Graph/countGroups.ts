const countGroups = (related) => {
  const n = related.length;
  const visited = new Array(n).fill(false);

  const dfs = (index) => {
    for (let i = 0; i < related[index].length; i++) {
      if (related[index][i] === "1" && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      visited[i] = true;
      dfs(i);
    }
  }
  return count;
};

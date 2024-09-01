function partitionLabels(s: string): number[] {
  const record = new Array(26).fill(0).map((_) => new Array());
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    record[code - 97].push(i);
  }
  const scopes = record.reduce((acc, curr) => {
    if (curr.length > 0) {
      acc.push([curr[0], curr[curr.length - 1]]);
    }
    return acc;
  }, []);
  const sortedScopes = scopes.sort((a, b) => a[0] - b[0]);
  const result = [];
  let scope = sortedScopes[0][1];
  for (let i = 1; i < sortedScopes.length; i++) {
    if (scope > sortedScopes[i][0]) {
      scope = Math.max(scope, sortedScopes[i][1]);
    } else {
      result.push(scope + 1);
      scope = sortedScopes[i][1];
    }
  }
  result.push(s.length);
  for (let i = result.length - 1; i > 0; i--) {
    result[i] = result[i] - result[i - 1];
  }
  return result;
}

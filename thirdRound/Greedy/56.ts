function merge(intervals: number[][]): number[][] {
  const res = [];
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let scope = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= scope[0] && intervals[i][0] <= scope[1]) {
      scope[1] = Math.max(scope[1], intervals[i][1]);
    } else {
      res.push(scope);
      scope = intervals[i];
    }
  }
  res.push(scope);
  return res;
}

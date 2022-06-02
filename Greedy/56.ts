function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const res: number[][] = [];
  let left = intervals[0][0],
    right = intervals[0][1];
  for (let i = 0; i < intervals.length - 1; i++) {
    if (right >= intervals[i + 1][0]) {
      right = Math.max(right, intervals[i + 1][1]);
    } else {
      res.push([left, right]);
      left = intervals[i + 1][0];
      right = intervals[i + 1][1];
    }
  }
  res.push([left, right]);
  return res;
}

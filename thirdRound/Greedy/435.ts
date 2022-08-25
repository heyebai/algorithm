function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let res = 0;
  let scope = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= scope) {
      scope = intervals[i][1];
    } else {
      scope = Math.min(scope, intervals[i][1]);
      res++;
    }
  }
  return res;
}

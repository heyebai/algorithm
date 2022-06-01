function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let res = 0;
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      res++;
      intervals[i + 1][1] = Math.min(intervals[i][1], intervals[i + 1][1]);
    }
  }
  return res;
}

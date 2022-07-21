function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let end = intervals[0][1];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) {
      end = Math.min(end, intervals[i][1]);
      count++;
    } else {
      end = intervals[i][1];
    }
  }
  return count;
}

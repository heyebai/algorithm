function merge(intervals: number[][]): number[][] {
  const sortedIntervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const result = [];
  let start = sortedIntervals[0][0];
  let end = sortedIntervals[0][1];

  for (let i = 1; i < sortedIntervals.length; i++) {
    if (sortedIntervals[i][0] <= end) {
      end = Math.max(end, sortedIntervals[i][1]);
    } else {
      result.push([start, end]);
      start = sortedIntervals[i][0];
      end = sortedIntervals[i][1];
    }
  }
  result.push([start, end]);
  return result;
}

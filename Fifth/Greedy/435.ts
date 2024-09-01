function eraseOverlapIntervals(intervals: number[][]): number {
  const sortedPoints = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let result = 0;
  let tempScope = sortedPoints[0][1];

  for (let i = 1; i < sortedPoints.length; i++) {
    if (sortedPoints[i][0] < tempScope) {
      tempScope = Math.min(tempScope, sortedPoints[i][1]);
      result++;
    } else {
      tempScope = sortedPoints[i][1];
    }
  }
  return result;
}

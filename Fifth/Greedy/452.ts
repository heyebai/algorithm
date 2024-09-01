function findMinArrowShots(points: number[][]): number {
  const sortedPoints = points.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let result = 1;
  let tempScope = sortedPoints[0];
  const isOverlaping = (s1, s2) => {
    return s1[1] >= s2[0];
  };
  for (let i = 1; i < sortedPoints.length; i++) {
    if (isOverlaping(tempScope, sortedPoints[i])) {
      tempScope = [
        sortedPoints[i][0],
        Math.min(tempScope[1], sortedPoints[i][1]),
      ];
    } else {
      result++;
      tempScope = sortedPoints[i];
    }
  }
  return result;
}

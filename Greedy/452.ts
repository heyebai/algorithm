function findMinArrowShots(points: number[][]): number {
  if (!points.length) return 0;
  points.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let res = 1;
  for (let i = 0; i < points.length - 1; i++) {
    if (points[i][1] < points[i + 1][0]) {
      res++;
    } else {
      points[i + 1][1] = Math.min(points[i][1], points[i + 1][1]);
    }
  }
  return res;
}

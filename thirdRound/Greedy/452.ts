function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;
  points.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let res = 1;
  let scope = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] >= scope[0] && points[i][0] <= scope[1]) {
      scope = [points[i][0], Math.min(points[i][1], scope[1])];
    } else {
      scope = points[i];
      res++;
    }
  }
  return res;
}

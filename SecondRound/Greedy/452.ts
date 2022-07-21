function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let [start, end] = [undefined, undefined];
  for (const p of points) {
    if (start === undefined) {
      [start, end] = p;
      count++;
    } else {
      if (p[0] >= start && p[0] <= end) {
        start = p[0];
        end = Math.min(p[1], end);
      } else {
        [start, end] = p;
        count++;
      }
    }
  }
  return count;
}

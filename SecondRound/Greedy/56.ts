function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  const res: number[][] = [];
  let [start, end] = [undefined, undefined];
  for (let i of intervals) {
    if (start === undefined) {
      [start, end] = i;
    } else {
      if (i[0] >= start && i[0] <= end) {
        end = Math.max(end, i[1]);
      } else {
        res.push([start, end]);
        [start, end] = i;
      }
    }
  }
  res.push([start, end]);

  return res;
}

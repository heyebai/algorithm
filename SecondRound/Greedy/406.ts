function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  const res: number[][] = [];
  for (const p of people) {
    res.splice(p[1], 0, p);
  }
  return res;
}

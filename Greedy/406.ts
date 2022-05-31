function reconstructQueue(people: number[][]): number[][] {
  //   people.sort((a, b) => {
  //     if (a[0] === b[0]) return a[1] - b[1];
  //     return b[0] - a[0];
  //   });
  people.sort((a, b) => a[1] - b[1]);
  people.sort((a, b) => b[0] - a[0]);
  const res: number[][] = [];
  for (let n of people) {
    res.splice(n[1], 0, n);
  }
  return res;
}

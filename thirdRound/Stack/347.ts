function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const temp: number[][] = Array.from(map);
  temp.sort((a, b) => {
    return b[1] - a[1];
  });
  const res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(temp[i][0]);
  }
  return res;
}

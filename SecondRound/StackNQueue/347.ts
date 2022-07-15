function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const arr = Array.from(map).sort((a, b) => b[1] - a[1]);
  console.log(arr);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
}

function majorityElement(nums: number[]): number {
  const obj = {};
  for (const n of nums) {
    if (Object.keys(obj).includes(n.toString())) {
      obj[n.toString()] += 1;
    } else {
      obj[n] = 1;
    }
  }
  const comparison = ~~(nums.length / 2);
  let res = 0;
  Object.keys(obj).forEach((key) => {
    if (obj[key] > comparison) {
      res = parseInt(key);
    }
  });
  return res;
}

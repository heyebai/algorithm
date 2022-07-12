function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map: Record<number, number> = {};
  for (const i of nums1) {
    for (const j of nums2) {
      if (map[i + j] === undefined) {
        map[i + j] = 1;
      } else {
        map[i + j] += 1;
      }
    }
  }
  let res = 0;
  for (const i of nums3) {
    for (const j of nums4) {
      if (map[0 - i - j]) {
        res += map[0 - i - j];
      }
    }
  }
  return res;
}

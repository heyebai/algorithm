function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const res = new Set();
  for (const num of nums2) {
    if (nums1Set.has(num)) {
      res.add(num);
    }
  }
  return Array.from(res) as number[];
}

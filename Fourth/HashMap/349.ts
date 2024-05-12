function intersection(nums1: number[], nums2: number[]): number[] {
  const res = [];
  for (const n of nums1) {
    if (nums2.includes(n)) {
      res.push(n);
    }
  }
  return Array.from(new Set(res));
}

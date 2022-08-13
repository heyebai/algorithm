function intersection(nums1: number[], nums2: number[]): number[] {
  const res: Set<number> = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      res.add(nums1[i]);
    }
  }
  return Array.from(res);
}

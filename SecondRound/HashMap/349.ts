function intersection(nums1: number[], nums2: number[]): number[] {
  const s: Set<number> = new Set();
  for (const n of nums1) {
    if (nums2.includes(n)) {
      s.add(n);
    }
  }
  return Array.from(s);
}

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

function intersection(nums1: number[], nums2: number[]): number[] {
  const result: Set<number> = new Set();
  nums1.forEach((item) => {
    nums2.includes(item) && result.add(item);
  });
  return Array.from(result);
}

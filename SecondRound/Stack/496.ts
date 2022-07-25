function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res: number[] = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    const start = nums2.indexOf(nums1[i]) + 1;
    for (let j = start; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res[i] = nums2[j];
        break;
      }
    }
  }
  return res;
}

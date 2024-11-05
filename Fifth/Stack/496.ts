function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack = [];
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (stack.length === 0) {
      stack.push(nums2[i]);
    } else {
      while (nums2[i] > stack[stack.length - 1]) {
        const num = stack.pop();
        map.set(num, nums2[i]);
      }
      stack.push(nums2[i]);
    }
  }
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(map.get(nums1[i]) ?? -1);
  }
  return result;
}

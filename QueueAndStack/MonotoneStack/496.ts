function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack = [],
    record = new Array(nums2.length).fill(-1),
    res = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop();
      record[index] = nums2[i];
    }
    stack.push(i);
  }

  for (const n of nums1) {
    const i = nums2.indexOf(n);
    res.push(record[i]);
  }
  return res;
}

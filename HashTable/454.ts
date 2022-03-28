// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const m: Map<number, number> = new Map();
  nums1.forEach((a) => {
    nums2.forEach((b) => {
      if (m.has(a + b)) {
        m.set(a + b, m.get(a + b) + 1);
      } else {
        m.set(a + b, 1);
      }
    });
  });
  let result: number = 0;
  nums3.forEach((c) => {
    nums4.forEach((d) => {
      if (m.has(0 - c - d)) {
        result += m.get(0 - c - d);
      }
    });
  });
  return result;
}

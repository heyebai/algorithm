const getMap = (nums1: number[], nums2: number[]) => {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const num = nums1[i] + nums2[j];
      if (map.get(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  }
  return map;
};

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map1 = getMap(nums1, nums2);
  const map2 = getMap(nums3, nums4);
  let result = 0;
  for (const [key, value] of map1) {
    const target = 0 - key;
    if (map2.get(target)) {
      result += value * map2.get(target);
    }
  }
  return result;
}

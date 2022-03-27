// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const convertToMap = (a: number[]): Map<number, number> => {
  const map1: Map<number, number> = new Map();
  for (let i of a) {
    if (map1.has(i)) {
      map1.set(i, map1.get(i) + 1);
    } else {
      map1.set(i, 1);
    }
  }
  return map1;
};

function intersect(nums1: number[], nums2: number[]): number[] {
  const map1: Map<number, number> = convertToMap(nums1),
    map2: Map<number, number> = convertToMap(nums2),
    map3: Map<number, number> = new Map(),
    result: number[] = [];
  for (let [k, v] of map1) {
    map2.has(k) && map3.set(k, Math.min(map1.get(k), map2.get(k)));
  }

  for (let [k, v] of map3) {
    for (let i = 0; i < v; i++) {
      result.push(k);
    }
  }
  return result;
}

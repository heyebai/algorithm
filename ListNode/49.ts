// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function groupAnagrams(strs: string[]): string[][] {
  if (strs.length < 2) {
    return [strs];
  }
  type Obj = Record<string, string[]>;
  const obj: Obj = {};
  strs.forEach((item) => {
    const bucket: number[] = new Array(26).fill(0);
    for (const i of item) {
      bucket[i.charCodeAt(0) % 26]++;
    }
    const s: string = bucket.toString();
    obj[s] ? obj[s].push(item) : (obj[s] = [item]);
  });
  return Object.values(obj);
}

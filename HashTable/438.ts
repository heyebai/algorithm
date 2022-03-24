// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function findAnagrams(s: string, p: string): number[] {
  const bucket: number[] = new Array(26).fill(0);
  for (const i of p) {
    bucket[i.charCodeAt(0) % 26]++;
  }
  return s.split("").reduce((acc, curr, i, a) => {
    if (i + p.length > s.length) {
      return acc;
    }
    const compareArr = [...bucket];
    for (let j = 0; j < p.length; j++) {
      compareArr[a[i + j].charCodeAt(0) % 26]--;
      if (compareArr[a[i + j].charCodeAt(0) % 26] < 0) {
        return acc;
      }
    }
    acc.push(i);
    return acc;
  }, []);
}

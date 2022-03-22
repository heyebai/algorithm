// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const arr: number[] = new Array(26).fill(0);
  for (const i of s) {
    arr[i.charCodeAt(0) % 26]++;
  }
  for (const i of t) {
    arr[i.charCodeAt(0) % 26]--;
    if (arr[i.charCodeAt(0) % 26] === -1) return false;
  }
  return true;
}

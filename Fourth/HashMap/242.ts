function isAnagram(s: string, t: string): boolean {
  const list = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    list[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    list[t.charCodeAt(i) - 97]--;
  }
  for (const n of list) {
    if (n !== 0) return false;
  }
  return true;
}

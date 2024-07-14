function isAnagram(s: string, t: string): boolean {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    arr[t.charCodeAt(i) - 97]--;
  }

  return arr.every((count) => count === 0);
}

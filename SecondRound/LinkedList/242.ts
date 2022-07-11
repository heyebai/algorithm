function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
  console.log(arr);
  for (let i = 0; i < t.length; i++) {
    arr[t.charCodeAt(i) - 97]--;
  }
  for (const n of arr) {
    if (n < 0) {
      return false;
    }
  }
  return true;
}

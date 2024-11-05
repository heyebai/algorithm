function isSubsequence(s: string, t: string): boolean {
  let sPointer = 0,
    tPointer = 0;
  let isSub = false;
  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  if (sPointer === s.length) {
    isSub = true;
  }
  return isSub;
}

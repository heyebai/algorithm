function repeatedSubstringPattern(s: string): boolean {
  const goNext = (t: string): number[] => {
    const next: number[] = new Array(t.length).fill(0);
    let j = 0;
    for (let i = 1; i < t.length; i++) {
      while (j > 0 && s[i] !== s[j]) {
        j = next[j - 1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  };
  if (s.length < 2) return false;
  const next = goNext(s);
  if (
    s.length % (s.length - next[s.length - 1]) === 0 &&
    next[s.length - 1] !== 0
  )
    return true;
  return false;
}

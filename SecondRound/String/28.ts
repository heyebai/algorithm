function strStr(haystack: string, needle: string): number {
  const goNext = (s: string): number[] => {
    const next: number[] = new Array(s.length).fill(0);
    let j = 0;
    for (let i = 1; i < s.length; i++) {
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
  if (needle.length === 0) return 0;
  const next = goNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
  }
  return -1;
}

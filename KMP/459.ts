function repeatedSubstringPattern(s: string): boolean {
  const getNext = (s: string): number[] => {
    const next: number[] = [0];
    let j = 0;
    for (let i = 1; i < s.length; i++) {
      while (j > 0 && s[i] !== s[j]) {
        j = next[j - 1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };

  const next: number[] = getNext(s);
  if (
    s.length % (s.length - next[s.length - 1]) === 0 &&
    next[s.length - 1] !== 0
  )
    return true;
  return false;
}

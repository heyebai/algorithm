function repeatedSubstringPattern(s: string): boolean {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = 0;
    next[0] = j;
    for (let i = 1; i < str.length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        console.log("???", i, j);
        j = next[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      next[i] = j;
      console.log(i, next);
    }
    return next;
  }

  let next: number[] = getNext(s);
  console.log(next);
  let sLength: number = s.length;
  let nextLength: number = next.length;
  let suffixLength: number = next[nextLength - 1];
  if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0) return true;
  return false;
}

repeatedSubstringPattern("asdfasdfaasdf");

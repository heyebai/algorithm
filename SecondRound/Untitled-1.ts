let store = [1, 2, 7, 4, 5, 6];

store = store.slice(0, 1).concat(store.slice(1 + 1));

const a = { 2: 3 };
console.log(a[3]);
console.log(store.sort((a, b) => (a - b > 0 ? 1 : -1)));

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
  const next = goNext(s);
  console.log(next);
  return false;
}

repeatedSubstringPattern("abaababaababaab");

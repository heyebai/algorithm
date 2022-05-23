const isPalindrome = (s: string, start: number, end: number): boolean => {
  let l = start,
    r = end;
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }
  return true;
};

function partition(s: string): string[][] {
  const res: string[][] = [];
  const path: string[] = [];
  const helper = (s: string, start: number) => {
    if (start >= s.length) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        path.push(s.substring(start, i + 1));
      } else {
        continue;
      }
      helper(s, i + 1);
      path.pop();
    }
  };
  helper(s, 0);
  return res;
}

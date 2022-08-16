function partition(s: string): string[][] {
  const isPalindrome = (s: string): boolean => {
    let start = 0,
      end = s.length - 1;
    while (start <= end) {
      if (s[start++] !== s[end--]) {
        return false;
      }
    }
    return true;
  };
  const res: string[][] = [];
  const backTracking = (path: string[], start: number) => {
    if (path.join("").length === s.length) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.substring(start, i + 1))) {
        path.push(s.substring(start, i + 1));
        backTracking(path, i + 1);
        path.pop();
      }
    }
  };
  backTracking([], 0);
  return res;
}

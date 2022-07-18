function partition(s: string): string[][] {
  const isPalindrome = (subs: string) => {
    let left = 0,
      right = subs.length - 1;
    while (left <= right) {
      if (subs[left++] !== subs[right--]) {
        return false;
      }
    }
    return true;
  };
  const res: string[][] = [];
  const backTracking = (path: string[], start: number) => {
    if (path.join("") === s) {
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

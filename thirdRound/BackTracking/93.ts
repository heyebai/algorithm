function restoreIpAddresses(s: string): string[] {
  const isValidSegment = (s: string): boolean => {
    if (s.length === 1) return true;
    if (s.indexOf("0") === 0) return false;
    const num = parseInt(s);
    return num >= 0 && num <= 255;
  };
  const res: string[] = [];
  const backTracking = (path: string[], start: number) => {
    if (path.join("").length === s.length && path.length === 4) {
      res.push(path.join("."));
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isValidSegment(s.substring(start, i + 1))) {
        path.push(s.substring(start, i + 1));
        backTracking(path, i + 1);
        path.pop();
      }
    }
  };
  backTracking([], 0);
  return res;
}

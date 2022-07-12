function reverseStr(s: string, k: number): string {
  const loopTimes = ~~(s.length / (2 * k));
  const res: string[] = [];
  for (let i = 0; i < loopTimes; i++) {
    for (let j = i * 2 * k + k - 1; j >= i * 2 * k; j--) {
      res.push(s[j]);
    }
    res.push(s.substring(i * 2 * k + k, i * 2 * k + k + k));
  }
  const left = s.length - 2 * k * loopTimes;
  if (left <= k) {
    for (let i = s.length - 1; i >= 2 * k * loopTimes; i--) {
      res.push(s[i]);
    }
  } else {
    for (let i = 2 * k * loopTimes + k - 1; i >= 2 * k * loopTimes; i--) {
      res.push(s[i]);
    }
    res.push(s.substring(2 * k * loopTimes + k));
  }
  return res.join("");
}

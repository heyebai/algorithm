const reverse = (a: string[], left: number, right: number): void => {
  let l: number = left - 1,
    r: number = right + 1;
  while (++l < --r) {
    [a[l], a[r]] = [a[r], a[l]];
  }
};

function reverseStr(s: string, k: number): string {
  const temp: string[] = s.split("");
  let loopTimes = ~~(s.length / (2 * k));
  s.length % (2 * k) > 0 && loopTimes++;
  for (let i = 0; i < loopTimes; i++) {
    i * 2 * k + k - 1 > s.length
      ? reverse(temp, i * 2 * k, s.length - 1)
      : reverse(temp, i * 2 * k, i * 2 * k + k - 1);
  }
  return temp.join("");
}

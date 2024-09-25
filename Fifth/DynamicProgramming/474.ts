const count = (s: string) => {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      zero++;
    } else if (s[i] === "1") {
      one++;
    }
  }
  return [zero, one];
};
function findMaxForm(strs: string[], m: number, n: number): number {
  const arr = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));
  // arr[0][0]=1

  for (let i = 0; i < strs.length; i++) {
    const [zero, one] = count(strs[i]);
    for (let x = m; x >= zero; x--) {
      for (let y = n; y >= one; y--) {
        arr[x][y] = Math.max(arr[x][y], arr[x - zero][y - one] + 1);
      }
    }
    // console.log(arr)
  }
  return arr[m][n];
}

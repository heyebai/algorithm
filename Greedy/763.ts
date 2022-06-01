function partitionLabels(s: string): number[] {
  const index: number[][] = [];
  for (let i = 0; i < s.length; i++) {
    const n = s.charCodeAt(i) - 97;
    if (!index[n]) {
      index[n] = [i, i];
    } else {
      index[n][1] = i;
    }
  }
  const res = [];
  let last = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (index[s.charCodeAt(i) - 97][1] > index[s.charCodeAt(i + 1) - 97][0]) {
      index[s.charCodeAt(i + 1) - 97][1] = Math.max(
        index[s.charCodeAt(i) - 97][1],
        index[s.charCodeAt(i + 1) - 97][1]
      );
    } else {
      res.push(index[s.charCodeAt(i) - 97][1] + 1 - last);
      last = index[s.charCodeAt(i) - 97][1] + 1;
    }
  }
  res.push(s.length - last);
  return res;
}

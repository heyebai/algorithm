function partitionLabels(s: string): number[] {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }
  const res = [];
  let sum = 0;
  let partition = map[s[0]];
  for (let i = 0; i < s.length; i++) {
    partition = Math.max(partition, map[s[i]]);

    if (i === partition) {
      res.push(partition - sum + 1);
      sum += res[res.length - 1];
    }
  }
  return res;
}

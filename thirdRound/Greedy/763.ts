function partitionLabels(s: string): number[] {
  // key:char, value:latest index
  const map: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  const res = [];
  let temp = map.get(s[0]);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) > temp) {
      temp = map.get(s[i]);
    }
    if (i === temp) {
      res.push(temp + 1 - sum);
      sum += res[res.length - 1];
    }
  }
  return res;
}

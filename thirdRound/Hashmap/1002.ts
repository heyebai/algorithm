function commonChars(words: string[]): string[] {
  if (words.length === 0) return [];
  const res: number[] = new Array(26).fill(0);
  for (const c of words[0]) {
    res[c.charCodeAt(0) - 97] += 1;
  }
  for (let i = 1; i < words.length; i++) {
    const temp = new Array(26).fill(0);
    for (const c of words[i]) {
      temp[c.charCodeAt(0) - 97] += 1;
    }
    for (let i = 0; i < res.length; i++) {
      res[i] = Math.min(res[i], temp[i]);
    }
  }
  const chars: string[] = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== 0) {
      for (let j = 0; j < res[i]; j++) {
        chars.push(String.fromCharCode(i + 97));
      }
    }
  }
  return chars;
}

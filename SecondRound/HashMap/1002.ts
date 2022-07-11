function commonChars(words: string[]): string[] {
  if (words.length === 0) return [];
  const arr = new Array(26).fill(0);
  for (const w of words[0]) {
    arr[w.charCodeAt(0) - 97]++;
  }
  for (let i = 1; i < words.length; i++) {
    const temp = new Array(26).fill(0);
    for (const w of words[i]) {
      temp[w.charCodeAt(0) - 97]++;
    }
    for (let j = 0; j < 26; j++) {
      arr[j] = Math.min(arr[j], temp[j]);
    }
  }
  const res: string[] = [];
  for (let j = 0; j < 26; j++) {
    if (arr[j] !== 0) {
      while (arr[j]--) {
        res.push(String.fromCharCode(97 + j));
      }
    }
  }
  return res;
}

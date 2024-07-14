const toCharCodeArray = (s: string, arr: number[]) => {
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
};

function commonChars(words: string[]): string[] {
  const result = new Array(26).fill(0);

  toCharCodeArray(words[0], result);
  for (let i = 1; i < words.length; i++) {
    const arr = new Array(26).fill(0);
    toCharCodeArray(words[i], arr);
    for (let j = 0; j < result.length; j++) {
      result[j] = Math.min(result[j], arr[j]);
    }
  }
  const res = [];
  for (let j = 0; j < result.length; j++) {
    while (result[j]) {
      res.push(String.fromCharCode(j + 97));
      result[j]--;
    }
  }
  return res;
}

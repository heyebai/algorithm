// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

function commonChars(words: string[]): string[] {
  if (words.length < 1) {
    return [];
  }
  let temp: string[] = [];
  let result: string[] = words[0].split("");
  for (let i = 0; i < words.length; i++) {
    temp = [...result];
    result = [];
    for (let j = 0; j < words[i].length; j++) {
      if (temp.includes(words[i][j])) {
        result.push(words[i][j]);
        const ind = temp.indexOf(words[i][j]);
        temp.splice(ind, 1);
      }
    }
  }
  return result;
}

function commonChars1(words: string[]): string[] {
  if (words.length < 1) {
    return [];
  }
  return words.reduce((acc, curr) => {
    const result: string[] = [];
    for (let s of curr) {
      if (acc.includes(s)) {
        result.push(s);
        const ind: number = acc.indexOf(s);
        acc.splice(ind, 1);
      }
    }
    return result;
  }, words[0].split(""));
}

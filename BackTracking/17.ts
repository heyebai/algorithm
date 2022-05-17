const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }
  const res: string[] = [];
  const path: string[] = [];
  const helper = (digits: string, x: number) => {
    if (path.length === digits.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < map[digits[x]].length; i++) {
      path.push(map[digits[x]][i]);
      helper(digits, x + 1);
      path.pop();
    }
  };
  helper(digits, 0);
  return res;
}

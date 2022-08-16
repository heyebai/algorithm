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
  if (digits.length === 0) return [];
  const res: string[] = [];
  const backTracking = (path: string[], start: number) => {
    if (path.length === digits.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = start; i < digits.length; i++) {
      for (let j = 0; j < map[digits[i]].length; j++) {
        path.push(map[digits[i]][j]);
        backTracking(path, i + 1);
        path.pop();
      }
    }
  };
  backTracking([], 0);
  return res;
}

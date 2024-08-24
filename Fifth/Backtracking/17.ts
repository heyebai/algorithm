const keyboard = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const result = [];
  const temp = [];
  const backTracking = (index) => {
    if (temp.length === digits.length) {
      result.push(temp.join(""));
      return;
    }
    const num = digits[index];
    for (let i = 0; i < keyboard[num].length; i++) {
      temp.push(keyboard[num][i]);
      backTracking(index + 1);
      temp.pop();
    }
  };
  backTracking(0);
  return result;
}

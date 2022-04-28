const map: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i of s) {
    if (Object.keys(map).includes(i)) {
      stack.push(i);
    } else {
      const bracket = stack.pop();
      if (map[bracket] !== i) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

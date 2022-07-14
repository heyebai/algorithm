function isValid(s: string): boolean {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const arr = [];
  for (const c of s) {
    if (Object.keys(map).includes(c)) {
      arr.push(c);
    } else {
      if (map[arr.pop()] !== c) {
        return false;
      }
    }
  }

  return arr.length === 0;
}

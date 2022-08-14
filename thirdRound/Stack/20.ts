function isValid(s: string): boolean {
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const arr: string[] = [];
  for (const b of s) {
    if (Object.keys(map).includes(b)) {
      const temp = arr.pop();
      if (temp !== map[b]) {
        return false;
      }
    } else {
      arr.push(b);
    }
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
}

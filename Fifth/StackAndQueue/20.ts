function isValid(s: string): boolean {
  const map = new Map();
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  const stack = [];
  for (const c of s) {
    if (map.has(c)) {
      if (stack.pop() !== map.get(c)) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  if (stack.length) return false;
  return true;
}

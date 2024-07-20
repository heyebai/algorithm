function removeDuplicates(s: string): string {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    while (s[i] && s[i] === stack[stack.length - 1]) {
      stack.pop();
      i++;
    }
    if (i < s.length) {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

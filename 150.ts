function evalRPN(tokens: string[]): number {
  const numberStack = [];
  for (const token of tokens) {
    if (!Number.isNaN(parseFloat(token))) {
      numberStack.push(parseFloat(token));
    } else {
      const a = numberStack.pop();
      const b = numberStack.pop();
      switch (token) {
        case "+":
          numberStack.push(a + b);
          break;
        case "-":
          numberStack.push(b - a);
          break;
        case "*":
          numberStack.push(b * a);
          break;
        case "/":
          numberStack.push(~~(b / a));
          break;
      }
    }
  }
  return numberStack[0];
}

const helper = (a: number, b: number, operator: string): number => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else {
    return ~~(a / b);
  }
};

function evalRPN(tokens: string[]): number {
  const numbers: number[] = [];
  tokens.forEach((token) => {
    if (isNaN(parseInt(token))) {
      const b: number = numbers.pop();
      const a: number = numbers.pop();
      numbers.push(helper(a, b, token));
    } else {
      numbers.push(parseInt(token));
    }
  });
  return numbers[0];
}

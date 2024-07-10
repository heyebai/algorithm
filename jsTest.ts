type Operator = "+" | "-" | "*" | "/" | "(" | ")";

function calculate(s: string): number {
  const nums = [],
    ops: Operator[] = [];

  let i = 0;
  const map = {
    "(": 0,
    ")": 0,
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const isNumber = (token: string) => !isNaN(parseInt(token));

  while (i < s.length) {
    const ch = s[i] as Operator;
    if (isNumber(ch)) {
      let num = ch;
      while (i + 1 < s.length && isNumber(s[i + 1])) {
        num += s[i + 1];
        i++;
      }
      nums.push(+num);
    } else if (ch === "(") {
      ops.push(ch);
    } else if (ch === ")") {
      while (ops.length > 0 && ops[ops.length - 1] !== "(") {
        nums.push(ops.pop());
      }
      ops.pop();
    } else if (map[ch]) {
      if (map[ops[ops.length - 1]] >= map[ch]) {
        while (ops.length > 0 && map[ops[ops.length - 1]] >= map[ch]) {
          nums.push(ops.pop());
        }
      }
      ops.push(ch);
    }
    i++;
  }

  console.log("ops::", ops);
  console.log("nums::", nums);
  while (ops.length > 0) {
    nums.push(ops.pop());
  }
  const stack: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const token = nums[i] as Operator | string;
    if (isNumber(token)) {
      stack.push(+token);
    } else {
      const b = stack.pop() || 0;
      const a = stack.pop() || 0;
      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(Math.floor(a / b));
      }
    }
  }

  return stack[0];
}

calculate("3+5/2+3");

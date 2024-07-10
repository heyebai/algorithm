const isNumber = (token) => !Number.isNaN(parseFloat(token));

const map = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "^": 3,
};

function calculate(s) {
  const tokens = [];
  const operators = [];
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    while (isNumber(s[i])) {
      temp.push(s[i++]);
    }
    if (temp.length) {
      tokens.push(temp.join(""));
      temp.length = 0;
    }
    if (s[i] === "(") {
      operators.push(s[i]);
    } else if (s[i] === ")") {
      console.log(operators);
      // console.log(s[i]);
      let storedToken = operators.pop();
      while (storedToken && storedToken !== "(") {
        tokens.push(storedToken);
        storedToken = operators.pop();
      }
      // while (operators[operators.length - 1] !== "(") {
      //   tokens.push(operators.pop());
      // }
      // operators.pop();
    } else if (map[s[i]]) {
      while (map[operators[operators.length - 1]] >= map[s[i]]) {
        tokens.push(operators.pop());
      }
      operators.push(s[i]);
    }
  }
  while (operators.length) {
    tokens.push(operators.pop());
  }
  console.log(tokens);
  const numbers = [];
  for (const token of tokens) {
    if (Number.isNaN(parseFloat(token))) {
      const a = numbers.pop();
      const b = numbers.pop() || 0;
      switch (token) {
        case "+":
          numbers.push(a + b);
          break;
        case "-":
          numbers.push(b - a);
          break;
        case "*":
          numbers.push(a * b);
          break;
        case "/":
          numbers.push(~~(b / a));
          break;
        case "^":
          numbers.push(Math.pow(b, a));
          break;
      }
    } else {
      numbers.push(parseFloat(token));
    }
  }
  return numbers[0];
}

console.log(calculate("22+33*2"));

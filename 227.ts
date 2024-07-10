type Token = "+" | "-" | "*" | "/" | "(" | ")";
// 3 2 2 * +
// "4+3+5/2+3"
// 4 3 5 2 /
const isNumber = (s: string) => !Number.isNaN(parseFloat(s));

const map = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  //   "^": 3,
};
function calculate(s: string): number {
  const tokens: string[] = [];
  const operator: Token[] = [];
  const temp: string[] = [];
  let i = 0;
  while (i < s.length) {
    while (isNumber(s[i])) {
      temp.push(s[i++]);
    }
    tokens.push(temp.join(""));
    temp.length = 0;
    // if (s[i] === "(") {
    //   operator.push(s[i]);
    // } else if (s[i] === ")") {
    //   while (operator[operator.length - 1] !== "(") {
    //     tokens.push(operator.pop());
    //   }
    //   operator.pop();
    // } else
    if (map[s[i]]) {
      while (map[operator[operator.length - 1]] >= map[s[i]]) {
        tokens.push(operator.pop());
      }
      operator.push(s[i]);
    }
    i++;
  }
  console.log(tokens);
  while (operator.length > 0) {
    tokens.push(operator.pop());
  }
  console.log(tokens);
  const filteredTokens = tokens.filter(Boolean);
  const numberStack = [];
  for (let token of filteredTokens) {
    if (isNumber(token)) {
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
          numberStack.push(a * b);
          break;
        case "/":
          numberStack.push(~~(b / a));
          break;
        // case "^":
        //   numberStack.push(Math.pow(b, a));
        //   break;
      }
    }
  }
  return numberStack[0];
}
//  5*4-2-(3+4*5)
const result = calculate("3+2*2");
result;

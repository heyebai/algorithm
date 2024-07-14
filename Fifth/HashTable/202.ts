// 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145->42->20->4

function isHappy(n: number): boolean {
  const numbers = new Set();
  let num = n;
  while (!numbers.has(num)) {
    if (num === 1) return true;
    let temp = 0;
    numbers.add(num);
    while (num) {
      const remainder = num % 10;
      temp += remainder * remainder;
      num = ~~(num / 10);
    }
    num = temp;
  }
  return false;
}

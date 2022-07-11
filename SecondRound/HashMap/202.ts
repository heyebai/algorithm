function isHappy(n: number): boolean {
  const arr = [];
  let num = n;
  while (!arr.includes(num)) {
    arr.push(num);
    let sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = ~~(num / 10);
    }
    if (sum === 1) {
      return true;
    } else {
      num = sum;
    }
  }
  return false;
}

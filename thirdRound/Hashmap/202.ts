function isHappy(n: number): boolean {
  let temp = n;
  const arr: number[] = [];
  while (!arr.includes(temp)) {
    arr.push(temp);
    let sum = 0;
    while (temp > 0) {
      const remainder = temp % 10;
      sum += Math.pow(remainder, 2);
      temp = ~~(temp / 10);
    }
    if (sum === 1) return true;
    temp = sum;
  }
  return false;
}

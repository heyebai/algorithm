// 2 4 16 37 58 89 64+72=136
function isHappy(n: number): boolean {
  const record = [];
  let num = n;
  while (num !== 1) {
    let sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }
    console.log(sum);
    if (record.includes(sum)) return false;
    record.push(sum);
    num = sum;
  }
  return true;
}

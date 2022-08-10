function maximumSum(nums: number[]): number {
  const sumOfDigits = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = ~~(num / 10);
    }
    return sum;
  };
  // k:sum of digits v:number
  let res: number = -1;
  const map: Map<number, number> = new Map();
  for (const n of nums) {
    const sum = sumOfDigits(n);
    if (map.has(sum)) {
      const numberSum = map.get(sum) + n;
      if (numberSum > res) {
        res = numberSum;
      }
      if (n > map.get(sum)) {
        map.set(sum, n);
      }
    } else {
      map.set(sum, n);
    }
  }
  return res;
}

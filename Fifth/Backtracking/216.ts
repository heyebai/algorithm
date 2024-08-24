function combinationSum3(k: number, n: number): number[][] {
  const result = [];
  const temp = [];
  let sum = 0;
  const backTracking = (index) => {
    if (temp.length === k && sum === n) {
      result.push(temp.slice());
      return;
    }
    for (let i = index; i <= 9; i++) {
      temp.push(i);
      sum += i;
      backTracking(i + 1);
      temp.pop();
      sum -= i;
    }
  };
  backTracking(1);
  return result;
}

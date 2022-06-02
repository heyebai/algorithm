function maxProfit(prices: number[], fee: number): number {
  let res = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] <= min + fee) {
      continue;
    } else {
      res += prices[i] - min - fee;
      min = prices[i] - fee;
    }
  }
  return res;
}

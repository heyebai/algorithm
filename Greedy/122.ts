function maxProfit(prices: number[]): number {
  let res: number = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      res += prices[i + 1] - prices[i];
    }
  }
  return res;
}

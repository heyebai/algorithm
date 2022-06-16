function maxProfit(prices: number[]): number {
  let low = Number.MAX_SAFE_INTEGER,
    result = 0;
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    result = Math.max(result, prices[i] - low);
  }
  return result;
}

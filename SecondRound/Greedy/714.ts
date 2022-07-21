function maxProfit(prices: number[], fee: number): number {
  const arr = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  arr[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    arr[i][0] = Math.max(prices[i] - fee + arr[i - 1][1], arr[i - 1][0]);
    arr[i][1] = Math.max(arr[i - 1][1], arr[i - 1][0] - prices[i]);
  }
  return arr[arr.length - 1][0];
}

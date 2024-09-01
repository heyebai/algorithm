function maxProfit(prices: number[]): number {
  // 0: we buy the stock
  // 1: the cash we keep
  const record = new Array(2)
    .fill(0)
    .map((_) => new Array(prices.length).fill(0));
  record[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    record[0][i] = Math.max(record[0][i - 1], record[1][i - 1] - prices[i]);
    record[1][i] = Math.max(record[1][i - 1], prices[i] + record[0][i - 1]);
  }
  return record[1][prices.length - 1];
}

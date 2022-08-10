function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b);
  if (amount[0] + amount[1] <= amount[2]) {
    return amount[2];
  } else {
    let res = amount[1] - amount[0];
    const temp = ~~((amount[2] - res) / 2);
    return amount[0] - temp + amount[2];
  }
}

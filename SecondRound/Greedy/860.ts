function lemonadeChange(bills: number[]): boolean {
  const count: number[] = new Array(2).fill(0);
  for (const b of bills) {
    if (b === 5) {
      count[0] += 1;
    } else if (b === 10) {
      count[1] += 1;
      if (count[0] < 1) return false;
      count[0] -= 1;
    } else if (b === 20) {
      count[2] += 1;
      if (count[1] < 1 && count[0] < 3) return false;
      if (count[1] > 0 && count[0] < 1) return false;
      if (count[1] > 0) {
        count[1] -= 1;
        count[0] -= 1;
      } else {
        count[0] -= 3;
      }
    }
  }
  return true;
}

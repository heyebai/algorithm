function lemonadeChange(bills: number[]): boolean {
  const changes: Record<number, number> = {
    5: 0,
    10: 0,
  };
  for (let n of bills) {
    if (n === 5) {
      changes[5] = changes[5] + 1;
    } else if (n === 10) {
      if (changes[5] < 1) {
        return false;
      }
      changes[10] = changes[10] + 1;
      changes[5] = changes[5] - 1;
    } else if (n === 20) {
      const sum = 5 * changes[5] + 10 * changes[10];
      if (sum < 15 || changes[5] < 1) {
        return false;
      }
      if (changes[10] > 0) {
        changes[10] = changes[10] - 1;
        changes[5] = changes[5] - 1;
      } else {
        changes[5] = changes[5] - 3;
      }
    }
  }
  return true;
}

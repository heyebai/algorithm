function lemonadeChange(bills: number[]): boolean {
  const arr: number[] = new Array(3).fill(0);
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      arr[0]++;
    } else if (bills[i] === 10) {
      arr[1]++;
      if (arr[0] > 0) {
        arr[0]--;
      } else {
        return false;
      }
    } else if (bills[i] === 20) {
      arr[2]++;
      if (arr[1] > 0) {
        arr[1]--;
        if (arr[0] > 0) {
          arr[0]--;
        } else {
          return false;
        }
      } else {
        if (arr[0] > 2) {
          arr[0] = arr[0] - 3;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

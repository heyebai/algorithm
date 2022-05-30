function candy(ratings: number[]): number {
  const candy: number[] = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      candy[i + 1] = candy[i] + 1;
    }
  }
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      candy[i - 1] = Math.max(candy[i] + 1, candy[i - 1]);
    }
  }
  let sum = 0;
  for (let n of candy) {
    sum += n;
  }
  return sum;
}

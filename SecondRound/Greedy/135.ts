function candy(ratings: number[]): number {
  const candies: number[] = new Array(ratings.length).fill(0);
  candies[0] = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    } else {
      candies[i] = 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  let sum = 0;
  for (const c of candies) {
    sum += c;
  }
  return sum;
}

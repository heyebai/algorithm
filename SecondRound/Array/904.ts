function totalFruit(fruits: number[]): number {
  const bucket: number[] = [];
  let slow = 0;
  let res = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (bucket.indexOf(fruits[i]) < 0 && bucket.length < 2) {
      bucket.push(fruits[i]);
    } else if (bucket.indexOf(fruits[i]) < 0 && bucket.length === 2) {
      let typeOut: number | undefined = -1;
      if (bucket.indexOf(fruits[i - 1]) === 1) {
        typeOut = bucket.shift();
      } else {
        typeOut = bucket.pop();
      }
      for (let j = i - 1; j >= slow; j--) {
        if (fruits[j] === typeOut) {
          slow = j + 1;
          break;
        }
      }
      bucket.push(fruits[i]);
    }
    if (res < i - slow + 1) {
      res = i - slow + 1;
    }
  }
  return res;
}

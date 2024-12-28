const determinePurchases = (volumes: number[]) => {
  let nextVolume = 1;
  const record = new Set();
  const result = [];
  for (let i = 0; i < volumes.length; i++) {
    if (volumes[i] === nextVolume) {
      // buy
      const purchases: number[] = [volumes[i]];
      for (let j = volumes[i] + 1; j <= i + 1; j++) {
        if (record.has(j)) {
          record.delete(j);
          purchases.push(j);
          nextVolume = j + 1;
        } else {
          break;
        }
      }
      result.push(purchases);
    } else {
      record.add(volumes[i]);
      result.push([-1]);
    }
  }
  return result;
};

console.log(determinePurchases([2, 1, 4, 3]));

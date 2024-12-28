const cleanupDataset = (dataset: string, x: number, y: number): number => {
  const record = new Map();
  //   a:3,b:4,c:5
  for (let data of dataset) {
    if (record.get(data)) {
      record.set(data, record.get(data) + 1);
    } else {
      record.set(data, 1);
    }
  }
  const arr = Array.from(record.values());
  arr;
  let cost = 0;
  if (x < y) {
    for (let i = 0; i < arr.length; i++) {
      while (arr[i] - 2 >= 0) {
        cost += x;
        arr[i] -= 2;
      }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    cost += (sum / 2) * y;
  } else {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      while (arr[left] > 0 && arr[right] > 0) {
        cost += y;
        arr[left]--;
        arr[right]--;
      }
      if (arr[left] === 0) {
        left++;
        continue;
      }
      if (arr[right] === 0) {
        right--;
        continue;
      }
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    cost += (sum / 2) * x;
  }
  return cost;
};

console.log(cleanupDataset("ouio", 2, 4));

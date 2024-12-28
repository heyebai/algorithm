const findMinimumTimeRequired = (requests: string, minGap: number) => {
  const record = new Map();
  for (let r of requests) {
    if (record.has(r)) {
      record.set(r, record.get(r) + 1);
    } else {
      record.set(r, 1);
    }
  }
  const sortedRequests = Array.from(record.values()).sort((a, b) => b - a);
  console.log(sortedRequests);
  const order = new Array(sortedRequests[0] * (minGap + 1)).fill(0);
  for (let i = 0; i < sortedRequests.length; i++) {
    for (let j = 0; j < sortedRequests[i]; j++) {
      // 0, 3, 6
      // 1,4,7
      let index = i + (minGap + 1) * j;
      while (order[index] !== 0 && order[index]) {
        index++;
      }
      if (index === order.length) {
        order.push(sortedRequests[i]);
      } else {
        order[index] = sortedRequests[i];
      }
    }
  }
  console.log(order);
  for (let i = order.length - 1; i >= 0; i--) {
    if (order[i] !== 0) {
      return i + 1;
    }
  }
  return 0;
};

const requests = "aaabbb";
const minGap = 2;
console.log(findMinimumTimeRequired(requests, minGap));

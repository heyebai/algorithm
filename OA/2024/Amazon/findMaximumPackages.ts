const getRecord = (cost) => {
  const record = new Map();
  for (let c of cost) {
    if (record.get(c)) {
      record.set(c, record.get(c) + 1);
    } else {
      record.set(c, 1);
    }
  }
  return record;
};

const findMaximumPackages = (cost: number[]) => {
  let max = 0;
  for (let c of cost) {
    max = Math.max(max, c);
  }
  let result = 0;
  for (let i = 1; i <= max; i++) {
    let tempResult = 0;
    const record = getRecord(cost);

    for (let j = 0; j < cost.length; j++) {
      if (record.get(cost[j]) === 0) {
        continue;
      }
      if (cost[j] === i) {
        tempResult++;
        record.set(cost[j], record.get(cost[j]) - 1);
        continue;
      }

      const theOther = i - cost[j];
      if (theOther < 0) continue;
      if (theOther === cost[j]) {
        if (record.get(theOther) > 1) {
          tempResult++;
          record.set(theOther, record.get(theOther) - 2);
          continue;
        }
      } else {
        if (record.get(theOther) > 0) {
          tempResult++;
          record.set(cost[j], record.get(cost[j]) - 1);
          record.set(theOther, record.get(theOther) - 1);
        }
      }
    }
    result = Math.max(result, tempResult);
  }

  return result;
};

console.log(findMaximumPackages([10, 2, 1]));

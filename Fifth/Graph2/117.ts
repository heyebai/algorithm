const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];
const func = (arr) => {
  const inDegrees = new Array(5).fill(0);
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i];
    inDegrees[y]++;
    if (map.get(x)) {
      map.get(x).push(y);
    } else {
      map.set(x, [y]);
    }
  }
  console.log(inDegrees);
  console.log(map);

  const queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
      inDegrees[i] = -1;
    }
  }
  const result = [];
  while (queue.length) {
    const index = queue.shift();
    result.push(index);
    console.log(index);
    for (let i = 0; i < map.get(index)?.length; i++) {
      inDegrees[map.get(index)[i]]--;
      if (inDegrees[map.get(index)[i]] === 0) {
        queue.push(map.get(index)[i]);
        inDegrees[map.get(index)[i]] = -1;
      }
    }

    // for (let i = 0; i < inDegrees.length; i++) {
    //   if (inDegrees[i] === 0) {
    //     queue.push(i);
    //     inDegrees[i] = -1;
    //   }
    // }
  }
  console.log(result);
  return result;
};

func(arr);

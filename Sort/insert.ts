export const arr = [1, 3, 29, 19, 9, 2, 4, 33, 6, 8];

const insert = () => {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1,
      curr = arr[i];
    while (preIndex >= 0 && curr < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = curr;
  }
  return arr;
};

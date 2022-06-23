export const arr = [1, 3, 29, 19, 9, 2, 4, 33, 6, 8];

const merge = (left: number[], right: number[]): number[] => {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
};
const mergeSort = (input: number[]) => {
  if (input.length < 2) return input;
  const mid = ~~(input.length / 2);
  const left = input.slice(0, mid);
  const right = input.slice(mid, input.length);
  return merge(mergeSort(left), mergeSort(right));
};

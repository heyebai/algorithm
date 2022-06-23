export const arr = [1, 3, 29, 19, 9, 2, 4, 33, 6, 8];

const bubble = (input: number[] = arr) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
};

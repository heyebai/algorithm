function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
  const helper = (nums: string[], len: number): number[][] => {
    const temp = [];
    for (let i = 0; i < nums.length; i++) {
      temp.push([nums[i].substring(nums[i].length - len, nums[i].length), i]);
    }
    return temp.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] > b[0] ? 1 : -1;
    });
  };
  const res: number[] = [];
  for (const q of queries) {
    const temp = helper(nums, q[1]);
    console.log(temp);
    res.push(temp[q[0] - 1][1]);
  }
  return res;
}

const a = smallestTrimmedNumbers(
  [
    "22222222222222222222222222222222222222222222222225",
    "22222222222222222222222222222222222222222222222221",
    "22222222222222222222222222222222222222222222222223",
    "22222222222222222222222222222222222222222222222228",
    "22222222222222222222222222222222222222222222222226",
  ],
  [
    [1, 40],
    [3, 40],
    [2, 40],
    [5, 40],
    [4, 40],
  ]
);

a;

const testType: number[] = [];
testType.push(222);
testType.push(222);
testType.push("abc");

testType;

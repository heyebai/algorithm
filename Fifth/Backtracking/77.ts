// function combine(n: number, k: number): number[][] {
//   const result = [];
//   const arr = [];
//   const recur = (i) => {
//     if (arr.length === k) {
//       result.push(arr.slice());
//       return;
//     }
//     for (let j = i; j <= n; j++) {
//       arr.push(j);
//       recur(j + 1);
//       arr.pop();
//     }
//   };
//   recur(1);
//   return result;
// }

function combine(n: number, k: number): number[][] {
  let resArr: number[][] = [];
  function backTracking(
    n: number,
    k: number,
    startIndex: number,
    tempArr: number[]
  ): void {
    if (tempArr.length === k) {
      resArr.push(tempArr.slice());
      return;
    }
    for (let i = startIndex; i <= n - (k - tempArr.length) + 1; i++) {
      console.log(tempArr);
      tempArr.push(i);
      backTracking(n, k, i + 1, tempArr);
      tempArr.pop();
    }
  }
  backTracking(n, k, 1, []);
  return resArr;
}

const test = combine(4, 3);
test;

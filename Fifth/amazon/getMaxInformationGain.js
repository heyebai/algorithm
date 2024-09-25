const getCount = (str) => {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }
  return arr;
};

const getMaxInformationGain = (arr, max) => {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    const aRecord = getCount(a);
    for (let j = i + 1; j < arr.length; j++) {
      let common = 0;
      const b = arr[j];
      const bRecord = getCount(b);
      for (let x = 0; x < 26; x++) {
        common += Math.min(aRecord[x], bRecord[x]);
      }
      if (common <= max) {
        result = Math.max(result, Math.abs(a.length - b.length));
      }
    }
  }
  return result;
};
const arr = ["teojomo", "xrqyjzginr", "nzwacxxa", "drwudx"];
// const arr = ["abofh", "ab", "mo"];
console.log(getMaxInformationGain(arr, 2));

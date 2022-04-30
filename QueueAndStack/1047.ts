function removeDuplicates(s: string): string {
  const resultArr: string[] = [];
  for (let i of s) {
    if (resultArr.length === 0) {
      resultArr.push(i);
    } else {
      if (i === resultArr[resultArr.length - 1]) {
        resultArr.pop();
      } else {
        resultArr.push(i);
      }
    }
  }
  return resultArr.join("");
}

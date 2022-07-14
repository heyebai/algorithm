function removeDuplicates(s: string): string {
  const arr = [];
  for (const c of s) {
    arr.push(c);
    while (arr.length > 1 && arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  return arr.join("");
}

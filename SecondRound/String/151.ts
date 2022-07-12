function reverseWords(s: string): string {
  const arr = s.split(" ");
  const res: string[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].trim() !== "") {
      res.push(arr[i].trim());
    }
  }
  return res.join(" ");
}

function reverseWords(s: string): string {
  let temp: string[] = s.split(" ");
  temp = temp.filter((e) => e !== "");
  let l: number = -1,
    r: number = temp.length;
  while (++l < --r) {
    [temp[l], temp[r]] = [temp[r], temp[l]];
  }
  return temp.join(" ");
}

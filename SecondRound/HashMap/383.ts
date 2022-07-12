function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr: number[] = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    arr[magazine.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    arr[ransomNote.charCodeAt(i) - 97]--;
  }
  for (let n of arr) {
    if (n < 0) {
      return false;
    }
  }
  return true;
}

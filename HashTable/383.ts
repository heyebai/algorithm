// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr: number[] = new Array(26).fill(0);
  for (const i of magazine) {
    arr[i.charCodeAt(0) % 26]++;
  }
  for (const i of ransomNote) {
    arr[i.charCodeAt(0) % 26]--;
    if (arr[i.charCodeAt(0) % 26] === -1) return false;
  }
  return true;
}

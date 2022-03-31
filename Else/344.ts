// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let l: number = -1,
    r: number = s.length;
  while (++l < --r) {
    [s[l], s[r]] = [s[r], s[l]];
  }
}

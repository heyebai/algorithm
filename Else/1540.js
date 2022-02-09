// Given two strings s and t, your goal is to convert s into t in k moves or less.

// During the ith (1 <= i <= k) move you can:

// Choose any index j (1-indexed) from s, such that 1 <= j <= s.length and j has not been chosen in any previous move, and shift the character at that index i times.
// Do nothing.
// Shifting a character means replacing it by the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). Shifting a character by i means applying the shift operations i times.

// Remember that any index j can be picked at most once.

// Return true if it's possible to convert s into t in no more than k moves, otherwise return false.

/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
  if (s.length !== t.length) {
    return false;
  }
  const arr = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      continue;
    }
    let steps = t.charCodeAt(i) - s.charCodeAt(i);
    if (steps < 0) {
      steps += 26;
    }
    arr[steps] += 1;
  }
  for (let i = 0; i < 26; i++) {
    if (k < (arr[i] - 1) * 26 + i) {
      return false;
    }
  }
  return true;
};

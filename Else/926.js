// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let sum = 0;
  for (let cha of s) {
    sum += parseInt(cha);
  }
  let minFlips = sum;
  let temp = sum;
  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) === 0) {
      temp += 1;
    } else {
      temp -= 1;
    }
    if (temp < minFlips) {
      minFlips = temp;
    }
  }
  return minFlips;
};

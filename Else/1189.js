// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const arr = Array(5).fill(0);
  const str = "abnlo";
  for (let cha of text) {
    const index = str.indexOf(cha);
    if (index !== -1) {
      arr[index] += 1;
    }
  }
  const minSingle = Math.min(...arr.slice(0, 3));
  const minDouble = Math.min(...arr.slice(3));
  if (minDouble >= 2 * minSingle) {
    return minSingle;
  } else {
    return ~~(minDouble / 2);
  }
};

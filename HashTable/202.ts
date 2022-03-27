// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function isHappy(n: number): boolean {
  const visited: Set<number> = new Set();
  let num: number = n;
  while (num > 1) {
    if (visited.has(num)) {
      return false;
    }
    visited.add(num);
    let temp: number = 0;
    while (num > 0) {
      temp += Math.pow(num % 10, 2);
      num = ~~(num / 10);
    }
    if (temp === 1) {
      return true;
    } else {
      num = temp;
    }
  }
  return true;
}

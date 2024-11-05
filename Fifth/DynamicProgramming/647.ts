const isPalindrome = (s: string) => {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

function countSubstrings(s: string): number {
  let result = 0;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isPalindrome(s.substring(j, i))) {
        result++;
      }
    }
  }
  return result;
}

function countSubstringsDp(s: string): number {
  const dp = new Array(s.length)
    .fill(0)
    .map((_) => new Array(s.length).fill(false));
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j]) {
        if (i - j <= 1 || dp[i - 1][j + 1]) {
          dp[i][j] = true;
          result++;
        }
      }
    }
  }
  return result;
}

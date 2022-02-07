// 给定三个字符串 s1、s2、s3，请判断 s3 能不能由 s1 和 s2 交织（交错） 组成。

// 两个字符串 s 和 t 交织 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交织 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 提示：a + b 意味着字符串 a 和 b 连接。

// 这题着的难想 现在还有点不会

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const result = [];
  // result[0] = Array(s2.length).fill(false)
  result[0] = Array(s2.length + 1).fill(false);

  result[0][0] = true;
  for (let i = 1; i <= s2.length; i++) {
    if (s2[i - 1] === s3[i - 1]) {
      result[0][i] = true;
    } else {
      break;
    }
  }
  for (let i = 1; i <= s1.length; i++) {
    if (s1[i - 1] === s3[i - 1]) {
      result.push([true]);
    } else {
      break;
    }
  }

  for (let i = result.length; i <= s1.length; i++) {
    result.push([false]);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      result[i][j] = false;
      if (s1[i - 1] === s3[i + j - 1] && result[i - 1][j]) {
        result[i][j] = true;
      }
      if (s2[j - 1] === s3[i + j - 1] && result[i][j - 1]) {
        result[i][j] = true;
      }
    }
  }
  return result[s1.length][s2.length];
};

// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) {
        return Array(code.length).fill(0);
    }
    const result = [];
    if (k > 0) {
        let temp = 0;
        for (let i = 1; i < k + 1; i++) {
            const index = i % code.length;
            temp += code[index];
        }
        result.push(temp);
        for (let i = 1; i < code.length; i++) {
            temp -= code[i];
            temp += code[(k + i) % code.length];
            result.push(temp);
        }
    } else if (k < 0) {
        k = Math.abs(k);
        let temp = 0;
        for (let i = 1; i < k + 1; i++) {
            const index = code.length - (i % code.length);
            temp += code[index];
        }
        result.push(temp);
        for (let i = 1; i < code.length; i++) {
            temp += code[i - 1];
            temp -=
                code[(code.length - ((k - i + 1) % code.length)) % code.length];
            result.push(temp);
        }
    }
    return result;
};

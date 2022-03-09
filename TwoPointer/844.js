// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const helper = (s) => {
    let lowPointer = [];
    const temp = s.split("");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== "#") {
            lowPointer.push(i);
        } else {
            temp[i] = "";
            if (lowPointer.length > 0) {
                temp[lowPointer.pop()] = "";
            }
        }
    }
    return temp.join("");
};
var backspaceCompare = function (s, t) {
    return helper(s) === helper(t);
};

// method 2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let si = s.length - 1,
        ti = t.length - 1;
    let sSkip = 0,
        tSkip = 0;
    while (si >= 0 || ti >= 0) {
        while (si >= 0) {
            if (s[si] === "#") {
                sSkip++;
                si--;
            } else if (sSkip > 0) {
                sSkip--;
                si--;
            } else {
                break;
            }
        }
        while (ti >= 0) {
            if (t[ti] === "#") {
                tSkip++;
                ti--;
            } else if (tSkip > 0) {
                tSkip--;
                ti--;
            } else {
                break;
            }
        }
        if (si >= 0 && ti >= 0) {
            if (s[si] !== t[ti]) {
                return false;
            }
        } else {
            if (si >= 0 || ti >= 0) {
                return false;
            }
        }
        si--;
        ti--;
    }
    return true;
};

// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let result = 0,
        sum = 0;
    for (let i = 0; i < k; i++) {
        result += cardPoints[i];
    }
    sum = result;
    for (let i = 0; i < k; i++) {
        let test =
            sum - cardPoints[k - i - 1] + cardPoints[cardPoints.length - 1 - i];

        if (test > result) {
            result = test;
        }
        sum = test;
    }
    return result;
};

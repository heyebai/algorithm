// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    if (fruits.length <= 2) {
        return fruits.length;
    }
    let l = (r = count = 0);
    let result = 2;
    let basket = new Array(fruits.length).fill(0);
    while (r < fruits.length) {
        basket[fruits[r]]++;
        if (basket[fruits[r]] === 1) {
            count++;
        }
        r++;
        while (count > 2) {
            basket[fruits[l]]--;
            if (basket[fruits[l]] === 0) {
                count--;
            }
            l++;
        }
        result = Math.max(result, r - l);
    }
    return result;
};

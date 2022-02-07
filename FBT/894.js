// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// n=7 (115,511) n=5 (113,311) n=3 (111)
var allPossibleFBT = function (n) {
    const result = [];
    if (n === 1) {
        const node = new TreeNode(0);
        result.push(node);
        return result;
    }
    // 遍历左边的情况
    for (let i = 1; i < n; i += 2) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n - i - 1);
        for (let l of left) {
            for (let r of right) {
                const node = new TreeNode(0, l, r);
                result.push(node);
            }
        }
    }
    return result;
};

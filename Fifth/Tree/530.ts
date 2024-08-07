/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  const nums = [];
  const recur = (node: TreeNode | null) => {
    if (!node) return;
    recur(node.left);
    nums.push(node.val);
    recur(node.right);
  };
  let minDiff = Number.MAX_SAFE_INTEGER;
  recur(root);
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
}

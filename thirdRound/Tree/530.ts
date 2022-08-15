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
  const arr = [];
  const helper = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    helper(node.left);
    arr.push(node.val);
    helper(node.right);
  };
  helper(root);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  return min;
}

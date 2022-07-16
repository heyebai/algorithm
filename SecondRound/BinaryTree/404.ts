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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;
  const helper = (node: TreeNode | null) => {
    if (!node) return 0;
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return sum;
}

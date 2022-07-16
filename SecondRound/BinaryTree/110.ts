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
const helper = (node: TreeNode | null): number => {
  if (!node) return 0;
  const left = helper(node.left);
  if (left === -1) return -1;
  const right = helper(node.right);
  if (right === -1) return -1;
  return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
};
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  const left = helper(root.left);
  const right = helper(root.right);
  if (left === -1 || right === -1) {
    return false;
  }
  return Math.abs(left - right) <= 1;
}

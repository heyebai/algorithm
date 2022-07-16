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
const helper = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if ((!left && right) || (left && !right)) {
    return false;
  }
  if (!left && !right) {
    return true;
  }
  if (left.val !== right.val) return false;
  return helper(left.left, right.right) && helper(left.right, right.left);
};
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;
  if (!helper(root.left, root.right)) return false;
  return true;
}

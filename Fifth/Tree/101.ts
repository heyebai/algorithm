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
const compare = (a: TreeNode | null, b: TreeNode | null): boolean => {
  if (!a && !b) return true;
  if (!a && b) return false;
  if (a && !b) return false;
  if (a.val !== b.val) return false;
  if (!compare(a.left, b.right)) return false;
  if (!compare(a.right, b.left)) return false;
  return true;
};
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;
  if (!compare(root.right, root.left)) return false;
  return true;
}

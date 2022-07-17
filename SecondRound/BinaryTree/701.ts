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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);
  if (val > root.val && !root.right) {
    root.right = new TreeNode(val);
  } else if (val < root.val && !root.left) {
    root.left = new TreeNode(val);
  }
  if (val > root.val) {
    insertIntoBST(root.right, val);
  } else if (val < root.val) {
    insertIntoBST(root.left, val);
  }
  return root;
}

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

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return root;
  if (root.val < low) {
    root = trimBST(root.right, low, high);
  } else if (root.val > high) {
    root = trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }
  return root;
}

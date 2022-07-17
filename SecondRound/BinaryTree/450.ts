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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;
  if (root.val === key) {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.left && root.right) {
      root = root.right;
    } else if (root.left && !root.right) {
      root = root.left;
    } else {
      let temp = root.right;
      while (temp.left) {
        temp = temp.left;
      }
      temp.left = root.left;
      root = root.right;
    }
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  return root;
}

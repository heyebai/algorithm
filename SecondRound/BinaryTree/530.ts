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
  const inorder = (node: TreeNode | null) => {
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      const diff = arr[i] - arr[i - 1];
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
  }
  return minDiff;
}

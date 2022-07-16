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
const backTracking = (
  node: TreeNode | null,
  targetSum: number,
  path: number[]
): boolean => {
  if (!node) return;
  path.push(node.val);
  if (!node.left && !node.right) {
    let sum = 0;
    for (const n of path) {
      sum += n;
    }
    if (sum === targetSum) {
      return true;
    }
  }
  if (node.left) {
    if (backTracking(node.left, targetSum, path)) return true;
    path.pop();
  }
  if (node.right) {
    if (backTracking(node.right, targetSum, path)) return true;
    path.pop();
  }
};
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const path = [];
  if (backTracking(root, targetSum, path)) return true;
  return false;
}

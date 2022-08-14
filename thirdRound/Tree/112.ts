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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  const sums = [];
  const helper = (path: number[], node: TreeNode | null) => {
    path.push(node.val);
    if (!node.left && !node.right) {
      let sum = 0;
      for (let n of path) {
        sum += n;
      }
      sums.push(sum);
      return;
    }
    node.left && helper(path.slice(), node.left);
    node.right && helper(path.slice(), node.right);
  };
  helper([], root);
  return sums.includes(targetSum);
}

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  const sums = [];
  const helper = (sum: number, node: TreeNode | null) => {
    sum += node.val;
    if (!node.left && !node.right) {
      sums.push(sum);
      return;
    }
    node.left && helper(sum, node.left);
    node.right && helper(sum, node.right);
  };
  helper(0, root);
  return sums.includes(targetSum);
}

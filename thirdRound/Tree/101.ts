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

function isSymmetric(root: TreeNode | null): boolean {
  const helper = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (!node1 && !node2) return true;
    if ((!node1 && node2) || (node1 && !node2)) return false;
    if (node1.val !== node2.val) return false;
    const left = helper(node1.left, node2.right);
    const right = helper(node1.right, node2.left);
    return left && right;
  };
  return helper(root.left, root.right);
}

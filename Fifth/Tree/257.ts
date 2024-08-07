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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result = [];
  const path = [];
  const getPath = (node: TreeNode | null) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      result.push(path.join("->"));
      path.pop();
      return;
    }
    if (node.left) {
      getPath(node.left);
    }
    if (node.right) {
      getPath(node.right);
    }
    path.pop();
  };
  getPath(root);
  return result;
}
